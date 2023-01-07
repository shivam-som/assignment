import * as React from "react";
import {useNavigate} from "react-router-dom";
import * as FileSaver from "file-saver";
import * as XLSX from 'sheetjs-style';
import { initialCommentQuestions, initialMcqQuestions, initialQuestions } from "../constants";
import { LoginInterface, QuestionInterface } from "../types";
import { CommentQuestion } from "./comment-question";
import { McqQuestion } from "./mcq-question";
import { Button } from "@mui/material";
import UploadExcel from "./upload-excel";
import Protected from "../auth";

export const Home = ({ isLoggedIn }: LoginInterface) => {
    const navigate = useNavigate();
    const [questionsData, setQuestionsData] = React.useState<QuestionInterface[]>(initialQuestions);
    const [isFormSubmit, setisFormSubmit] = React.useState(false);

    const setAnswer = (index: number, ans: string) => {
        const commentArr = [...questionsData];
        commentArr[index].answer = ans;
        setQuestionsData(commentArr);
    }
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToExcel = async () => {
        const ws = XLSX.utils.json_to_sheet(questionsData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, 'examResult' + fileExtension);
    };

    const handleSubmit = () => {
        exportToExcel()
        setisFormSubmit(true);
    }
    const signoutHandle = () => {
        navigate('/');
        localStorage.removeItem('isLoggedIn');
    }

    return <>
        <Protected>
            {
                isFormSubmit ?
                    <UploadExcel />
                    :
                    <>
                        <h1 className="heading">Exam form</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="home-wrapper">
                                <h3 className="heading">Descriptive Questions</h3>
                                {initialCommentQuestions.map((question, index) => {
                                    return <CommentQuestion key={index} index={index} question={question.question} setAnswer={setAnswer} />;
                                })}
                                <h3 className="heading">MCQ Questions</h3>
                                {initialMcqQuestions.map((question, index) => {
                                    return <McqQuestion
                                        key={index}
                                        index={index}
                                        question={question.question}
                                        options={question.answer}
                                        setAnswer={setAnswer}
                                    />;
                                })}
                            </div>
                            <div className="question-wrapper">
                                <Button variant="contained" type="submit">Submit Exam</Button>
                                <Button style={{ 'float': 'right' }} onClick={signoutHandle} variant="contained">Sign out</Button>
                            </div>
                        </form>
                    </>
            }
        </Protected>
    </>
}

export default Home;

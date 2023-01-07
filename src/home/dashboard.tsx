import { FormLabel } from '@mui/material';
import * as React from 'react'
import { DashBoardInterface } from '../types';

const Dashboard = ({ questionsData }: DashBoardInterface) => {
    return (
        <>
            <h3 className="heading">Exam Submission Details are:- </h3>
            {
                questionsData.map((item, index) => {
                    return <>
                        <div key={index} className="question-wrapper">
                            <FormLabel className="comment-question" id="demo-row-radio-buttons-group-label">
                                {index + 1}.  {item.question}
                            </FormLabel>
                            <p>Ans:- {item.answer}</p>
                        </div>
                    </>
                })
            }
        </>
    )
}

export default Dashboard;

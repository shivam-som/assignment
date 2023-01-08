import * as React from "react";
import TextField from '@mui/material/TextField';
import '../App.css';
import { SetQuestionInterface } from "../types";
import { FormLabel } from "@mui/material";

export const CommentQuestion = ({ index, question, setAnswer }: SetQuestionInterface) => {
    return <>
        <div className="question-wrapper">
            <FormLabel className="comment-question" id="demo-row-radio-buttons-group-label">{index+1}.  {question}</FormLabel>
            <TextField
                required
                id="standard-basic"
                placeholder="comment here ..."
                variant="standard"
                onChange={(event) => {
                    setAnswer(index, event.target.value);
                }}
            />
        </div>
    </>
};

import * as React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import '../App.css';
import { SetMcqQuestionInterface } from "../types";

export const McqQuestion = ({ index, question, options, setAnswer }: SetMcqQuestionInterface) => {
    const [selected, setSelected] = React.useState("");
    return <>
        <div className="question-wrapper">
            <FormControl>
                <FormLabel className="comment-question" id="demo-row-radio-buttons-group-label">
                    {index+1}.  {question}
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={selected}
                    onChange={(event) => {
                        setSelected(event.target.value);
                        setAnswer(index+3, event.target.value);
                    }}
                >
                    {options.map((option, index) => (
                        <FormControlLabel
                            key={index}
                            value={option}
                            control={<Radio />}
                            label={option}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    </>
};

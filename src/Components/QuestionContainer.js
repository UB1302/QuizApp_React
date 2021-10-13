// import { useEffect, useState } from "react";
import { useState } from "react";
import Option from "./Option";

const QuestionContainer = ({correct_answer, incorrect_answers, question,clickHandler}) => {

    // const [isEditable, setIsEditable] = useState(true)

    // const clickHandler = (option) => {
    //     console.log(isEditable)
    //     if(isEditable){
    //         setIsEditable(false)    
    //         setTimeout(()=>{
    //             nextQuestion()
    //         },2000)
    //     }
        
    // }

    return (
        <>
        <h4>{question}</h4>
        <ul>
            <Option key = {correct_answer} text = {correct_answer} clickHandler = {clickHandler}/>
            {incorrect_answers.map((option) => {
                return <Option key = {option} text = {option} clickHandler = {clickHandler}/>
            })}    
        </ul>
        </>
    )
}

export default QuestionContainer;
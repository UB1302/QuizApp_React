import axios from "axios";
import { useEffect, useState } from "react";
import QuestionContainer from "./QuestionContainer";

const Quiz = () => {

    const [score,setScore] = useState(0);
    const [questions,setQuestions] = useState([])
    const [loading, setLoading] = useState(true)
    const [questionCount, setQuestionCount] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [isEditable, setIsEditable] = useState(true)

    const fetchQuestions = async () => {
        try {
            const response = await axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
            // console.log(response.data.results)
            setQuestions(response.data.results)
            
        }catch(error){
            console.log(error)
        }finally {
            setLoading(false);
        }
        
    }

    const nextQuestion = () => {
        // console.log(questionCount)
        setQuestionCount(prevCount => prevCount +1)
        // console.log(questionCount)
        // setCurrentQuestion(questions[questionCount])
        // setIsEditable(true)
    }

    useEffect(()=>{
        setCurrentQuestion(questions[questionCount])
        setIsEditable(true)
    },[questionCount,questions])

    const clickHandler = (option) => {
        // console.log(isEditable)
        if(currentQuestion.correct_answer === option){
            setScore(prevScore => prevScore+1)
        }
        if(isEditable){
            console.log("yo!")
            setIsEditable(false)    
            // setTimeout(()=>{
                nextQuestion()
            // },1000)
        }
        
    }

    useEffect(()=>{
        fetchQuestions();
    },[])

    useEffect(()=>{
        if(questions){
            setCurrentQuestion(questions[0])
        } 
    },[questions])

    if(loading){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if(questionCount === 10){
        return (
            <div>
                <h1>
                Quiz completed. Hurray!
                </h1>
                <h3>{score}</h3>
                </div>

        )
    }

    return (
        <>
        <h1>Take a Quiz</h1>
        <h3>Score: {score}</h3>
        {currentQuestion && <QuestionContainer key = {currentQuestion} correct_answer = {currentQuestion.correct_answer} incorrect_answers = {currentQuestion.incorrect_answers} question = {currentQuestion.question} nextQuestion = {nextQuestion}
        clickHandler = {clickHandler}
        />}

        </>
    )
}

export default Quiz;
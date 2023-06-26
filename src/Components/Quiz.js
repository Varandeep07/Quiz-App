import React, {useState, useContext} from 'react'
import {Questions} from '../Helpers/QuestionBank';
import { QuizContext} from '../Helpers/Contexts';

export default function Quiz() {
  const {score, setScore, setGameState} = useContext(QuizContext);

  const [curQuestion, setCurQuestion] = useState(0);
  const [optChosen, setOptChosen] = useState("");
  
  const nextQuestion = () => {
    if(Questions[curQuestion].answer===optChosen){
        setScore(score+1);
    }
    setCurQuestion(curQuestion+1);
  };

  const finishQuiz = () => {
    if(Questions[curQuestion].answer===optChosen){
        setScore(score+1);
    }
    setGameState("endScreen");
  }

  return (
    <div className='Quiz'>
        <h2 className='prompt'>{Questions[curQuestion].prompt}</h2>
        <div className="options">
            <button className={optChosen == 'A' ? 'selected' : ''}
             onClick={()=>setOptChosen("A")}> 
             {Questions[curQuestion].optA} 
             </button>
             <button className={optChosen == 'B' ? 'selected' : ''}
             onClick={()=>setOptChosen("B")}> 
             {Questions[curQuestion].optB} 
             </button>
             <button className={optChosen == 'C' ? 'selected' : ''}
             onClick={()=>setOptChosen("C")}> 
             {Questions[curQuestion].optC} 
             </button>
             <button className={optChosen == 'D' ? 'selected' : ''}
             onClick={()=>setOptChosen("D")}> 
             {Questions[curQuestion].optD} 
             </button>
        </div>  
        {
            curQuestion===Questions.length-1?
            (<button  className = "finish-btn" onClick={finishQuiz}>Finish Quiz</button>):
            (<button className = "next-btn" onClick={nextQuestion}>Next Question</button>)
        }
    </div>
  )
}

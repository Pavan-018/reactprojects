import React, {useState} from "react";
function App() {
  const questions = [
    {
    questionText: 'What is the capital city of AP ?',
    answerOptions: [
      {answerText: 'Kurnool', isCorrect:'false'},
      {answerText: 'Amaravati', isCorrect:'false'},
      {answerText: 'Vizag', isCorrect:'true'},
      {answerText: 'Vijayawada', isCorrect:'false'},
    ],
  },
  {
    questionText: 'What is the capital city of TS ?',
    answerOptions: [
      {answerText: 'Hyd', isCorrect:'true'},
      {answerText: 'Sangareddy', isCorrect:'false'},
      {answerText: 'Nalgonda', isCorrect:'false'},
      {answerText: 'Warangal', isCorrect:'false'},
    ],
  },
  {
    questionText: 'Who is the CEO of Google ?',
    answerOptions: [
      {answerText: 'Elon Musk', isCorrect:'false'},
      {answerText: 'Satya Nadella', isCorrect:'false'},
      {answerText: 'Ratan Tata', isCorrect:'false'},
      {answerText: 'Sundar Pichai', isCorrect:'true'},
    ],
  },
  {
    questionText: 'Where is the biggest amazon office located ?',
    
    answerOptions: [
      {answerText: 'US', isCorrect:'false'},
      {answerText: 'UK', isCorrect:'false'},
      {answerText: 'CANADA', isCorrect:'false'},
      {answerText: 'INDIA(HYD)', isCorrect:'true'},
    ],
  },
  {
    questionText: 'Which one of the following places where virtusa office not  located ?',
    
    answerOptions: [
      {answerText: 'US', isCorrect:'false'},
      {answerText: 'UK', isCorrect:'false'},
      {answerText: 'FRANCE', isCorrect:'true'},
      {answerText: 'INDIA', isCorrect:'false'},
    ],
  },
  ];
  const[curQuestion, setCurQuestion]=useState(0); 
  const[showScore, setShowScore]=useState(false); 
  const[score, setScore]=useState(0);

  const handleClick=(isCorrect)=>{
    if(isCorrect){
      setScore(score + 1);
    }
    const nextQuestion = curQuestion+1;
    if(nextQuestion<questions.length){
      setCurQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }
   
  }
  return (
    <div className="App">
     {showScore  ? (
      <div className="score_part">You Scored {score} out of {questions.length}</div>
     ) :(
        <>
           <div className="question_part">
               <div className="question_count">
                   <span> Question {curQuestion+1}</span>/{questions.length}
               </div>
               <div className="question_section">{questions[curQuestion].questionText}
               </div>
            </div>
            <div className="answer_section">
                {questions[curQuestion].answerOptions.map((answerOption)=>(<button onClick={()=>handleClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
            </div>
        </>     
        )}
    </div>
  );
}

export default App;

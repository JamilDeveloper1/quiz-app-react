import React, { useState } from 'react'

function App() {

  const [score,setScore] = useState(0);
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [result,setResult] = useState(false);



  const questions = [
    {
      text: "What do you understand by HTML?",
      options: [
        { id: 0, text: "HTML describes the structure of a webpage", isCorrect: false },
        { id: 1, text: "HTML is the standard markup language mainly used to create web pages", isCorrect: false },
        { id: 2, text: "HTML consists of a set of elements that helps the browser how to view the content", isCorrect: false },
        { id: 3, text: "All of the above", isCorrect: true },
      ],
    },
    {
      text: "HTML stands for ___?",
      options: [
        { id: 0, text: "Hyper Text Markup Language", isCorrect: true },
        { id: 1, text: "Hyper Text Machine Language", isCorrect: false },
        { id: 2, text: "Hyper Text Marking Language", isCorrect: false },
        { id: 3, text: "High Text Marking Language", isCorrect: false },
      ],
    },
    {
      text: "React is mainly used for building ___.",
      options: [
        { id: 0, text: "User interface", isCorrect: true },
        { id: 1, text: "Database", isCorrect: false },
        { id: 2, text: "Connectivity", isCorrect: false },
        { id: 3, text: "Design Platform", isCorrect: false },
      ],
    },
    {
      text: "Who Develop React.js??",
      options: [
        { id: 0, text: "Google", isCorrect: false },
        { id: 1, text: "Facebook", isCorrect: true },
        { id: 2, text: " Twitter", isCorrect: false },
        { id: 3, text: "microsoft", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is not components of Redux?",
      options: [
        { id: 0, text: "Action", isCorrect: false },
        { id: 1, text: "State", isCorrect: false },
        { id: 2, text: "View", isCorrect: true },
        { id: 3, text: " Reducer", isCorrect: false },
      ],
    },
  ];


  const newQuestion = (isCorrect) =>{
    if(isCorrect){
      setScore(score + 1);
    }
    if(currentQuestion + 1 < questions.length){
      setCurrentQuestion(currentQuestion + 1);
    }else{
      setResult(true);
    }

  }

  const nextQuestion = () =>{
    if(currentQuestion + 1 < questions.length){
      setCurrentQuestion(currentQuestion + 1);
    }else{
      setResult(true);
    }

  }


  const restartQuestion = () =>{
    setScore(0);
    setCurrentQuestion(0);
    setResult(false);
  }


  return (
    <div className='p-5 flex flex-col gap-3 items-center justify-center'>
  <h1 className='text-lg sm:text-2xl'>Frontend Development Quiz</h1>
  <h3>Your score : {score} / {questions.length} </h3>
  {
    result  ? 
    <div className='flex shadow-md shadow-[#00000052]  flex-col gap-3 items-center justify-center  w-11/12 p-3 rounded-md md:w-1/2'>
      <p className='text-lg sm:text-2xl'>Your score - ({(score / questions.length)* 100}%)</p>
      <button className='border-slate-400 border w-1/3 rounded-md hover:bg-blue-400 sm:w-1/5 p-1'  onClick={restartQuestion} >Restart</button>
    </div>
    :
  <div className=' shadow-md shadow-[#00000052]  w-11/12 md:w-2/3  p-3 flex flex-col gap-3 mt-5'>
    <h1> Question: {currentQuestion + 1} out of {questions.length}</h1>
    <h3 className=' sm:text-xl'>{questions[currentQuestion].text}</h3>
 
      {
        questions[currentQuestion].options.map(item =>(
          <button onClick={()=>newQuestion(item.isCorrect)} className='text-start border border-slate-400 p-3 rounded-md hover:bg-slate-400 ' key={item.id} >{item.text}</button>
        ))
      }
          <button className='border-slate-400 border w-1/4 rounded-md hover:bg-blue-400 sm:w-1/5 p-1' onClick={nextQuestion}>Next</button>   
    </div>
 
}

   </div>
  )
}

export default App

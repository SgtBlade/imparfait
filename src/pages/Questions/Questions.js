import React, { useState}  from "react";
import {useStores} from '../../hooks/useStores' 
import { useObserver } from "mobx-react-lite";
import style from "./Questions.module.css"
import Question from "../Question/Question";


const Questions = () => {

  const { uiStore } = useStores();
  const [noMoreQuestions, setNoMoreQuestions] = useState(false);
  const [showErrorPrompt, setShowErrorPrompt] = useState(false)
  const [difficulty, setDifficulty] = useState(1)

  const [currentQuestions, setCurrentQuestions] = useState([])

  const loadQuestions = (diff) => {
      let allQuestions = uiStore.questions;
      if(allQuestions.length === 0) setNoMoreQuestions(true)
      else{
      allQuestions = allQuestions.filter(ques => ques.difficulty === parseInt(diff)).sort(() => .5 - Math.random()).slice(0, 5);
      setCurrentQuestions(allQuestions);
      uiStore.setCurrent(allQuestions);
    }
  }


  if(currentQuestions.length === 0 && !noMoreQuestions)loadQuestions(1);


  const checkResponse = async () => {
    const temp = uiStore.checkResponses()
    if(temp.length !== 0) {
      setShowErrorPrompt(true)
    }
    else {
      NewExercises();
    }
  }

  const tryAgain = () => {
    setCurrentQuestions(uiStore.getCurrent);
    setShowErrorPrompt(false);
  }

  const NewExercises = async () => {
      uiStore.moveOn();
      if(uiStore.getCurrent.length < 5) setNoMoreQuestions(true)
      else {
      loadQuestions(difficulty);
      setShowErrorPrompt(false);
      }

  }

  return useObserver(() => (
    !noMoreQuestions ?
    <section className={style.questions}>

      {showErrorPrompt ? 
      <div className={style.tryAgainPrompt}>
        <p>Er zijn een of meerdere fouten gevonden</p>
        
        <div className={style.tryAgainPrompt__ErrorWrap}>

        <p className={style.checkResponseButton} onClick={tryAgain}>Ik wil er nog eens naar kijken</p>
        <p className={style.checkResponseButton} onClick={NewExercises}>Ik wil andere oefeningen</p>


        </div>
      </div>
      :''}
      


      <div className={style.difficulty}>
          <p>Maximum moeilijkheids graad:</p>
          <select className={style.dropdownMenu} onChange={e => {setDifficulty(e.currentTarget.value)}}>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
      </div>
      
      <div className={style.questionsWrap}>
      {currentQuestions.map((question, index) => (<Question index={index} question={question} key={question.id}/>))}
      </div>

      <p className={style.checkResponseButton} onClick={checkResponse}>Controleer mijn antwoorden</p>


    </section>
    :
    <section className={style.questions}>
    
      <h2 className={style.ending}>Je hebt alle oefeningen gemaakt</h2>

      <p onClick={e=>{
        uiStore.restart();
        setNoMoreQuestions(false);
        loadQuestions(difficulty);
      }} className={style.checkResponseButton}>Begin opnieuw?</p>

    </section>

  ));
};

export default Questions;

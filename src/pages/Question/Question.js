import React, {useState} from "react";
import { useObserver } from "mobx-react-lite";
import style from "./Question.module.css"
import {useStores} from '../../hooks/useStores' 

const Question = ({question, index}) => {

  const { uiStore } = useStores();

  const [input, setInput] = useState("")

  const addValue = (value) => {
    setInput(value)
    uiStore.setResponse(value, index)
  }

  return useObserver(() => (
    <section className={style.question}>

      <div className={style.questionWrap}>
      <p>{question.exercise.p1}</p>
      <input value={input} onChange={e=> addValue(e.currentTarget.value)} className={style.input}/>
      <p><strong className={style.strong}>{question.exercise.aid}</strong> {question.exercise.p2}</p>
      </div>
      {question.hadError ? <p className={style.error}>Je hebt hier een foutje, probeer het nog eens</p> : ''}
      
    </section>
  ));
};

export default Question;

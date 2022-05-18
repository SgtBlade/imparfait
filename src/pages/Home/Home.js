import React  from "react";
import { useObserver } from "mobx-react-lite";
import style from "./Home.module.css"
import Questions from "../Questions/Questions";

const Home = () => {



  return useObserver(() => (
    <section className={style.window}>
      <h1 className={style.title} >Oefeningen op l'imparfait</h1>

        <Questions/>
      
    </section>
  ));
};

export default Home;

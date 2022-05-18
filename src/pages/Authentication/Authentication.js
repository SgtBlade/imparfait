import React from "react";
import { useObserver } from "mobx-react-lite";
import Home from "../Home/Home.js";
import style from "./Authentication.module.css"


const Authentication = () => {


  //const location = useLocation();

  return useObserver(() => (
    <>
      <section className={style.main}>

          <Home/>

          <p className={style.banner}> Code is beschikbaar op <a href="https://github.com/SgtBlade/imparfait" rel="noreferrer" target={"_blank"}
>https://github.com/SgtBlade/imparfait</a> </p>

      </section>
    </>
  ));
};

export default Authentication;

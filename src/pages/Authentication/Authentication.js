import React from "react";
import { useObserver } from "mobx-react-lite";
import { Switch, Route } from "react-router-dom";

import { ROUTES } from "../../consts/index.js";
import Home from "../Home/Home.js";

const Authentication = () => {


  //const location = useLocation();

  return useObserver(() => (
    <>
      <Switch>

          <Home/>


      </Switch>
    </>
  ));
};

export default Authentication;

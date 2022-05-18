import React from "react";
import { useObserver } from "mobx-react-lite";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../consts";
import style from "./Header.module.css";


const Header = () => {

  const location = useLocation();
  //<Link to={ROUTES.featured} className={`${style.headerList__item} ${location.pathname === ROUTES.featured ? style.active : ''}`}> <li>Featured</li> </Link>

  return useObserver(() => (
    <header className={style.header}>
      <Link className={style.headerImage} to={ROUTES.photography}><img src="./images/logo/logoLarge.jpeg" height="50" width="296" alt={'Mathias De Pelsmaeker'}/></Link>

      <ul className={style.headerList}>
          <Link to={ROUTES.photography} className={`${style.headerList__item} ${location.pathname === ROUTES.home ? style.active : ''}`}> <li>Photography</li> </Link>
          <Link to={ROUTES.about} className={`${style.headerList__item} ${location.pathname === ROUTES.about ? style.active : ''}`}> <li>About</li> </Link>
          
      </ul>
    </header>
  ));
};

export default Header;

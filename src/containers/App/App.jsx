// React
import React from "react";
// Router
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Style
import style from "../../styles/index.css";
// Header
import Header from "../../components/header/Header";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
// Pages
import PeoplePage from "../PeoplePage/PeoplePage";
import LoginPage from "../ContactPage/LoginPage";
import HomePage from "../HomePage/HomePage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import PersonPage from "../PersonPage/PersonPage";
import GalleryPage from "../GalleryPage/Gallery";

const App = () => {
  return (
    <div>
      <div className={style.wrapper}>
        {/* Router */}
        <BrowserRouter>
          <BurgerMenu />
          <Header />

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/members">
              <PeoplePage />
            </Route>

            <Route exact path="/gallery">
              <GalleryPage />
            </Route>

            <Route exact path="/login">
              <LoginPage />
            </Route>

            <Route exact path="/members/:id">
              <PersonPage />
            </Route>

            <Route exact={false} path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

// export
export default App;

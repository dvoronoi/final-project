import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import RecipeReviewCard from "./BooksPage/BooksList";
import CardPage from "./CardPage";
import ContactsPage from "./ContactsPage";
import LoginPage from "./LoginPage";
import ErrorPage from "./NotFoundPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/books" component={RecipeReviewCard} />
      <Route exact path="/contacts" component={ContactsPage} />
      <Route exact path="/cart" component={CardPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="" component={ErrorPage} />
      <Redirect to="" />
    </Switch>
  );
}

export default Routes;

import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import MainPage from "./main/main_page";
import ProfileContainer from "./profile/profile_container";
import RestaurantCompose from "./restaurant/restaurant_compose";
import Restaurant from "./restaurant/restaurant";

import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />

      <ProtectedRoute exact path="/restaurants" component={Restaurant} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute
        exact
        path="/new_restaurant"
        component={RestaurantCompose}
      />
    </Switch>
  </div>
);

export default App;

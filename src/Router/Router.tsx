import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import MobileLayout from "../Layout/MobileLayout";
import List from "../Pages/List";
import Home from "../Pages/Home";

type Props = {};

const Router = (props: Props) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MobileLayout noFooter>
              <Login />
            </MobileLayout>
          }
        />
        <Route
          path="/list"
          element={
            <MobileLayout>
              <List />
            </MobileLayout>
          }
        />
        <Route
          path="/home"
          element={
            <MobileLayout>
              <Home />
            </MobileLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default Router;

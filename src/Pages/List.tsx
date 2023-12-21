import React from "react";
import Header from "../Components/Header";
import Dashboard from "../Components/Dashboard";

type Props = {};

const List = (props: Props) => {
  return (
    <div className="pt-10">
      <Header />

      <Dashboard />
    </div>
  );
};

export default List;

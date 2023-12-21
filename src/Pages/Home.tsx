import React from "react";
import Header from "../Components/Header";
import { IoMdSearch } from "react-icons/io";
import { employeeData } from "../Data/data";
import Dashboard from "../Components/Dashboard";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="pt-10">
      <Header />
      <Dashboard />
    </div>
  );
};

export default Home;

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import MobileLayout from '../Layout/MobileLayout'
import List from '../Pages/List';

type Props = {};

const Router = (props: Props) => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<MobileLayout><Login/></MobileLayout>} />
            <Route path="/list" element={<MobileLayout><List/></MobileLayout>} />
        </Routes>
    </div>
  );
};

export default Router;

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'

type Props = {}

const Router = (props: Props) => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    </div>
  )
}

export default Router
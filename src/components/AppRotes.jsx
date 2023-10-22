import React from "react";
import { Route, Routes } from 'react-router-dom';
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Index from "../pages/Index";
import CellTradeIndex from "../celltrade";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path='' element={<CellTradeIndex/>}/>
            {/* <Route path='/About' element={<About/>} />
            <Route path='/Posts' element={<Posts/>} />
            <Route path='/posts/:id' element={<PostIdPage/>} /> */}    
      </Routes>
    );
};

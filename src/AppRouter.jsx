import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Add from "./Pages/Add";
import ApiUser from "./Pages/ApiUser";
import Atualizar from "./Pages/Atualizar";
import Excluir from "./Pages/Excluir";
import Home from "./Pages/Home";

function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ApiUser />}></Route> 
            <Route path="/criar" element={<Add />}></Route>
            <Route path="/update/:id" element={<Atualizar/>}></Route>
            <Route path="/dog" element={<Home/>} ></Route>
            
           
        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter
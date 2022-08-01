import React from 'react';
import { Route, Routes } from "react-router-dom";
import Messenges from "../pages/Messenges";
import Main from "../pages/Main";

function AntRoutes() {
	return (
		<>
		<Routes>
      <Route path="/*" element={<Main />}></Route>
      <Route path="/messenges" element={<Messenges />}></Route>
    </Routes>
		</>)
}

export default AntRoutes
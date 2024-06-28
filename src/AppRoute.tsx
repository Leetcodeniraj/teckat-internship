import React from "react";
import { Route, Routes } from "react-router-dom";
import {  CreateStudent, HomePage,StudentOutlet, Students, UpdateStudent } from "./pages";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";
import Test4 from "./pages/Test4";
import Test5 from "./pages/Test5";
import Test6 from "./pages/Test6";
import Testing from "./pages/Testing";
import Connect from "./pages/Connect";




const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="connect" element={<Connect/>}/>
      <Route path="testing" element={<Testing/>}/>
      <Route path="test1" element={<Test1/>}/>
      <Route path="test2" element={<Test2/>}/>
      <Route path="test3" element={<Test3/>}/>
      <Route path="test4" element={<Test4/>}/>
      <Route path="test5" element={<Test5/>}/>
      <Route path="test6" element={<Test6/>}/>
      <Route path="homePage" element= {<HomePage />} />
      <Route path="student" element={<StudentOutlet />}>
      <Route path="" element={<Students/>} />
      <Route path="create-student" element={<CreateStudent />} />
      <Route path="update-student/:studentID" element={<UpdateStudent />} />
      </Route>
    </Routes>
  );
};

export default AppRoute

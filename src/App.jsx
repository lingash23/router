import React, { useState } from "react";
import Navbar from "./components/Navbar";
import All from "./components/All";
import FullStackDevelopment from "./components/FullStackDevelopment";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  let data=[
    {
      type:"FSD",
      img:"https://www.keycdn.com/img/support/full-stack-development.png",
      content:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      
    },
    {
      type:"FSD",
      img:"https://www.keycdn.com/img/support/full-stack-development.png",
      content:"Top Differences: Full Stack Developer vs Software Engineer 2024",
    },
    {
      type:"FSD",
      img:"https://www.keycdn.com/img/support/full-stack-development.png",
      content:"Horizontal vs Vertical Scaling for Efficient System Design",
    },
    {
      type:"CyberSecurity",
      img:"https://imageio.forbes.com/specials-images/imageserve/5fbeb1078f6a67593da00784/----------/960x0.jpg?height=399&width=711&fit=bounds",
      content:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    },
    {
      type:"CyberSecurity",
      img:"https://imageio.forbes.com/specials-images/imageserve/5fbeb1078f6a67593da00784/----------/960x0.jpg?height=399&width=711&fit=bounds",
      content:"Install Miro on Windows: A 2-Step Comprehensive Guide",
    },
    {
      type:"CyberSecurity",
      img:"https://imageio.forbes.com/specials-images/imageserve/5fbeb1078f6a67593da00784/----------/960x0.jpg?height=399&width=711&fit=bounds",
      content:"What Is Hacking? Types of Hacking & More",
    },
    {
      type:"Career",
      img:"https://www.digitalvidya.com/blog/wp-content/uploads/2019/07/Career-Planning_11e51d7713b3dd7a9c26782ae82eb165.jpg",
      content:"Top 5 IT Jobs for Economics Students",
    },
    {
      type:"Career",
      img:"https://www.digitalvidya.com/blog/wp-content/uploads/2019/07/Career-Planning_11e51d7713b3dd7a9c26782ae82eb165.jpg",
      content:"Automation Test Engineer Resume: 10 Important Things To Consider",
    },
    {
      type:"Career",
      img:"https://www.digitalvidya.com/blog/wp-content/uploads/2019/07/Career-Planning_11e51d7713b3dd7a9c26782ae82eb165.jpg",
      content:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
    },
    {
      type:"DataScience",
      img:"https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg",
      content:"Best Data Science course through non codejobs",
    },
    {
      type:"DataScience",
      img:"https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg",
      content:"Best Data Science course books on this industry",
    },
    {
      type:"DataScience",
      img:"https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg",
      content:"Best Data Science course",
      },
    
  ]
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/all" element={<All data={data}/>}></Route>
          <Route
            path="/fullstackdevelopment"
            element={<FullStackDevelopment data={data}/>}
          ></Route>
          <Route path="/datascience" element={<DataScience data={data}/>}></Route>
          <Route path="/cybersecurity" element={<CyberSecurity data={data}/>}></Route>
          <Route path="/career" element={<Career data={data}/>}></Route>
          <Route path="*" element={<Navigate to="/all" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
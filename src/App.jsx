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
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      content:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      
    },
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      content:"Top Differences: Full Stack Developer vs Software Engineer 2024",
    },
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      content:"Horizontal vs Vertical Scaling for Efficient System Design",
    },
    {
      type:"CyberSecurity",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      content:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    },
    {
      type:"CyberSecurity",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Install-Miro-on-Windows-A-2-Step-Comprehensive-Guide.webp",
      content:"Install Miro on Windows: A 2-Step Comprehensive Guide",
    },
    {
      type:"CyberSecurity",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      content:"What Is Hacking? Types of Hacking & More",
    },
    {
      type:"Career",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      content:"Top 5 IT Jobs for Economics Students",
    },
    {
      type:"Career",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      content:"Automation Test Engineer Resume: 10 Important Things To Consider",
    },
    {
      type:"Career",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      content:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
    },
    {
      type:"DataScience",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      content:"Best Data Science course through non codejobs",
    },
    {
      type:"DataScience",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      content:"Best Data Science course books on this industry",
    },
    {
      type:"DataScience",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
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
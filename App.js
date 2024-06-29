import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HowItWorks from './pages/HowItWorks';
import ViewProgram from './pages/ViewProgram';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import TeamSection from './pages/TeamSection';
import './App.css';
import Internship from './pages/Internship';
import WebdevTask from './pages/InternshipSubgroup/WebdevTask';
import FrontendTask from './pages/InternshipSubgroup/FrontendTask';
import DataAnalystTask from './pages/InternshipSubgroup/DataAnalystTask';
import BusinessAnalystTask from './pages/InternshipSubgroup/BusinessAnalystTask';
import DataScienceTask from './pages/InternshipSubgroup/DataScienceTask';
import AIMLTask from './pages/InternshipSubgroup/AIMLTask';
import UIUXTask from './pages/InternshipSubgroup/UIUXTask';
import PythonDeveloperTask from './pages/InternshipSubgroup/PythonDeveloperTask';
import JavaDeveloperTask from './pages/InternshipSubgroup/JavaDeveloperTask';
import MERNStackTask from './pages/InternshipSubgroup/MERNStackTask';
import SDEInternTask from './pages/InternshipSubgroup/SDEInternTask';
import SDETInternTask from './pages/InternshipSubgroup/SDETInternTask';
import AppDevelopmentTask from './pages/InternshipSubgroup/AppDevelopmentTask';
import SocialMediaMarketingTask from './pages/InternshipSubgroup/SocialMediaMarketingTask';
import Login from './pages/Login';
import SignUp from './pages/Signup';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/view-program" element={<ViewProgram />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/WebdevTask" element={<WebdevTask />} />
        <Route path="/FrontendTask" element={<FrontendTask />} />
        <Route path="/DataAnalystTask" element={<DataAnalystTask />} />
        <Route path="/BusinessAnalystTask" element={<BusinessAnalystTask />} />
        <Route path="/DataScienceTask" element={<DataScienceTask />} />
        <Route path="/AIMLTask" element={<AIMLTask />} />
        <Route path="/UIUXTask" element={<UIUXTask />} />
        <Route path="/PythonDeveloperTask" element={<PythonDeveloperTask />} />
        <Route path="/JavaDeveloperTask" element={<JavaDeveloperTask />} />
        <Route path="/MERNStackTask" element={<MERNStackTask />} />
        <Route path="/SDEInternTask" element={<SDEInternTask />} />
        <Route path="/SDETInternTask" element={<SDETInternTask />} />
        <Route path="/AppDevelopmentTask" element={<AppDevelopmentTask />} />
        <Route path="/SocialMediaMarketingTask" element={<SocialMediaMarketingTask />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-team" element={<TeamSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

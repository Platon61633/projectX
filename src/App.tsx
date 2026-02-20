import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Head from "./components/Head";
import Main from "./page/Main";
import Footer from './components/Footer';
import Courses from './page/Courses';
import AboutUs from './page/AboutUs';
import Teachers from './page/Teachers';
import Intensive from './page/Intensive';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Head/>
        <main>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/about_us' element={<AboutUs/>} />
            <Route path='/teachers' element={<Teachers/>} />
            <Route path='/intensive' element={<Intensive/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

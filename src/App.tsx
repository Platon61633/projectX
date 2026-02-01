import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Head from "./components/Head";
import Main from "./page/Main";
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Head/>
        <main>
          <Routes>
            <Route path="/" element={<Main/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

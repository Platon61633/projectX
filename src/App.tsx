import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Head from "./components/Head";
import Main from "./page/Main";


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
      </div>
    </BrowserRouter>
  );
}

export default App;

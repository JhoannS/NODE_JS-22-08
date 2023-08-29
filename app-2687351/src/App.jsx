import * as React from 'react';
import './App.css';
import Header from './Header';
import Employees from "./Employees";
import Content from "./Content";
import Footer from './Footer';


function App(){
  return(
    <div>
      <Header />
      <Content />
      <Employees />
      <Footer />
    </div>
  );
}

export default App;
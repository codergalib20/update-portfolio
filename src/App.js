import React from 'react';
import backgroundImage from './assets/bg.jpg';
import Header from './views/components/custom/Header';
import Home from './views/pages/Home';
const App = () => {
  const backgrounaMain = {
    background: `linear-gradient(rgba(0,0,0,.85),rgba(0,0,0,.85)),url(${backgroundImage}) no-repeat top center`,
    height: "100vh",
    backgroundAttachment: "fixed",
  }
  return (
    <div  style={backgrounaMain}>
      <Header />
      <Home/>
    </div>
  );
};

export default App;
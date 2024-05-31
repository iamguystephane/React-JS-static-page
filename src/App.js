import React from 'react';
import './App.css';

function Header(){
  return(
    <nav>
      <div className="left-nav">
        <img src="logo192.png" width="60px" alt="React logo"></img>
        <h3> React Facts </h3>
      </div>
      <div className="right-nav">
        <h4> React Course - project 1</h4>
      </div>
    </nav>
  );
}

function MainContent(){
  return(
    <main>
      <h1> Fun facts about React </h1>
      <ul>
        <li> Was first released in 2013 </li>
        <li> Was originally created by Jordan Walke </li>
        <li> Has well over 100k stars on Github </li>
        <li> Is maintained by Facebook </li>
        <li> Powers thousands of enterprise apps, including mobile apps </li>
      </ul>
    </main>
  )
}

function Page(){
  return (
    <div>
      <header>
        <Header />
      </header>
      <MainContent />
    </div>
  )
}

export default Page;
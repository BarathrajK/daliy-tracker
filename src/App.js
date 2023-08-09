import React from 'react';
import UserLogin from './UserLogin/UserLogin';
import ActivityUser from './ActivityUser/Activity'
import Details from './Details/Details'
import Project from './Project/Project';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <UserLogin/>
      <Project/>
      <ActivityUser/>
      <Details/> */}
      <Routes>
        <Route path='/' element = {<UserLogin />} />
        <Route path='/UserLogin' element = {<UserLogin />} />
        <Route path='/Project' element = {<Project />} />
        <Route path='/ActivityUser' element = {<ActivityUser />} />
        <Route path='/Details' element = {<Details />} />
      </Routes>
    </div>
  );
}

export default App;

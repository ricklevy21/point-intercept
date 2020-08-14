import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

//pages
import Home from './pages/Home/Home'
import Projects from './pages/Projects'
import CreateProject from './pages/CreateProject'
import ResumeProject from './pages/ResumeProject'
import RecordPage from './pages/RecordPage'
import ViewData from './pages/ViewData'
import NotFound from './pages/NotFound'

//components
import Navbar from './components/Navbar/index'




function App() {
  return (
    <Router>
      <Navbar/>
    <div className="container">
      <Switch>
      <Route exact path="/">
        {<Home
        className='home'
        />}
      </Route>
      <Route exact path="/projects">
        {<Projects />}
      </Route>
      <Route exact path="/create">
        {<CreateProject />}
      </Route>
      <Route exact path="/resume">
        {<ResumeProject />}
      </Route>
      <Route exact path="/record">
        {<RecordPage />}
      </Route>
      <Route exact path="/data">
        {<ViewData />}
      </Route>
      <Route path="/*">
        {<NotFound />}
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

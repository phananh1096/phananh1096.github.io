import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import About from './about'
import Resume from './resume'
import Contact from './contact'
import Education from './education'
import Project from './projects'
import Landing from './landing'

const Main = () => (
    <Switch>
        <Route exact path ="/" component={Landing} />
        <Route exact path ="/aboutme " component={About} />
        <Route path ="/resume " component={Resume} />
        <Route path ="/contact " component={Contact} />
        <Route path ="/education " component={Education} />
        <Route path ="/projects " component={Project} />
    </Switch>
)

export default Main
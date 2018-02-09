import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { App, Whoops404 } from './components'
import SkiDayCount from './components/containers/SkiDayCount'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={SkiDayCount}/>
        <Route path="*" component={Whoops404}/>
        </Route>
    </Router>
);

export default routes 
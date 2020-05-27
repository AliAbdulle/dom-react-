import React from 'react'
import {Link, Switch,Router} from 'react-router-dom'

import Info from './Info'
import Setting  from'./Setting'

function Profile() {
    return(
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to="/profile/info">Profile Info</Link></li>
                <li><Link to="/profile/setting">Profile Setting</Link></li>
            </ul>
            
            <Switch>
                <Router path="/profile/info"></Router>
                <Router path="/profile/setting"></Router>
            </Switch>
        </div>
    )
}
export default Profile
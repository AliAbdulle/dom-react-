import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'

import Info from './Info'
import Setting from './Setting'

function Profile() {
    
    return(
        <div>
            <h1>Profile Page</h1>
            {/* link the file page */}
            <ul>
                <li><Link to="/profile/info">Profile Info</Link></li>
                <li><Link to="/profile/setting">Profile Setting</Link></li>
            </ul>
            <Switch>
                <Route path="/profile/info">
                    <Info/>
                </Route>
                <Route path="/profile/setting">
                    <Setting/>
                </Route>
            </Switch>
        </div>
    )
}
export default Profile
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Components
import WelcomePage from './WelcomePage';
import Login from './Login';
import SignUp from './SignUp';

// Styled Components
import { Nav } from './StyledWidgets';

const AppRouter = () => {


    return (
        <Router>
            <Nav>
                <div className='app-router'>
                    <Link to = '/'>Home</Link>
                    <Link to ='/signup'>SignUp</Link>
                    <Link to = '/login'>Login</Link>

                </div>

            </Nav>


            <Switch>
                <Route exact path ='/' component = {WelcomePage} />
                <Route path = '/signup' component = {SignUp} />
                <Route path = '/login' component = {Login} />
            </Switch>
        </Router>
    )
};

export default AppRouter;
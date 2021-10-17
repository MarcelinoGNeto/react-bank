import React from 'react';
import './styles.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Navbar = () => {

    return (
        <navbar className="Navbar">

            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/about">
                                <p>Estou em Sobre</p>
                            </Route>
                            <Route path="/contact">
                                <p>Estou em Contato</p>
                            </Route>
                            <Route path="/">
                                <p>Estou em Home</p>
                            </Route>
                        </Switch>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home | </Link>
                                    <Link to="/about">Sobre | </Link>
                                    <Link to="/contact">Contato</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Router>
            </div>

            <p>G Bank</p>

        </navbar>
    );
};

export default Navbar;
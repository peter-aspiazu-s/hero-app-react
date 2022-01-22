import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext)

    const navigate = useNavigate();


    const handleLogout = () => {
        
        dispatch({ type: types.logout });

        navigate('/login', {
            replace: true
        });
    }

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-center text-md-start px-md-5">
    
        <Link 
            className="navbar-brand" 
            to="/"
        >
            Asociaciones
        </Link>
    
        <div className="navbar-collapse">
            <div className="navbar-nav">
    
                <NavLink 
                    className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                    to="/marvel"
                >
                    Marvel
                </NavLink>
    
                <NavLink 
                    className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                    to="/dc"
                >
                    DC
                </NavLink>
    
                <NavLink 
                    className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                    to="/search"
                >
                    Search
                </NavLink>
            </div>
        </div>
    
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-center justify-content-md-end">
            <ul className="navbar-nav ml-auto">
    
                <span className="nav-item nav-link text-info">
                    { user.name }
                </span>
                
                <button 
                    className="nav-item nav-link btn" 
                    onClick={ handleLogout }
                >
                    Logout
                </button>
            </ul>
        </div>
    </nav>
        
        )}

        {/*<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Asociaciones
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </ul>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">

                        <span className="nav-item nav-link text-info">
                            { user.name }
                        </span>
                        
                        <button 
                            className="nav-item nav-link btn" 
                            onClick={ handleLogout }
                        >
                            Logout
                        </button>
                    </ul>
                </div>
                </div>
            </div>
        </nav>*/}
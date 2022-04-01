import React, { useState, useEffect } from 'react';
import { useRoutes } from 'hookrouter'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYinYang } from "@fortawesome/free-solid-svg-icons";

import NavBar from '../components/navigation/NavBar'
import Home from './pages/home'
import About from './pages/about';
import SignUp from '../components/pages/auth/sign-up'
import Login from '../components/pages/auth/login'
import Cards from '../components/pages/cards'
import AddCard from './pages/add-card';
import Cookies from 'js-cookie'

library.add(faYinYang)

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if(Cookies.get('username')) {
      setLoggedIn(true)
    }
  })

    const logout = () => {
      Cookies.remove('username')
      setLoggedIn(false)
    }

  const routes = {
    "/": () => <Home loggedIn={loggedIn} />,
    "/about": () => <About />,
    "/cards": () => <Cards />,
    "/signup": () => <SignUp />,
    '/login': () => <Login />,
    '/cards': () => <Cards />,
    '/add-card': () => <AddCard />
  }
  const routeResult = useRoutes(routes)
  return (
    <div className='container'>
      <div>
        <NavBar loggedIn={loggedIn} logout={logout}/>
        {routeResult}
      </div>
    </div>
  )
}

import React from 'react'
import { auth } from './Auth'
import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import { useDispatch } from 'react-redux';
import logo from '../Assets/logo.webp'

export default function Nav(auth) {
  const dispatch = useDispatch()
  
  return (
    <div>
         <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <img className="nav__img" src={logo} alt="logo" />
        </figure>
        <ul className="nav__list--wrapper">
          <li className="nav__list nav__list--login" onClick={() => dispatch(openSignupModal())}>{auth ? 'Logout' : 'Login'}</li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

import React from 'react'
import { auth } from './Auth'

export default function Nav(auth) {
  return (
    <div>
         <nav class="nav">
      <div class="nav__wrapper">
        <figure class="nav__img--mask">
          <img class="nav__img" src="" alt="logo" />
        </figure>
        <ul class="nav__list--wrapper">
          <li class="nav__list nav__list--login">{auth ? 'Logout' : 'Login'}</li>
          <li class="nav__list nav__list--mobile">About</li>
          <li class="nav__list nav__list--mobile">Contact</li>
          <li class="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

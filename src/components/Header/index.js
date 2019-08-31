import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import HeaderStyled from './style'

export default class Header extends Component {
    render() {
        return (
            <HeaderStyled>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </HeaderStyled>
        )
    }
}

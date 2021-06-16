import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function Header({ children }) {
    return (
        <header className="headerContainer">
            <img src='https://github.com/vtrgon.png'/>
            <Link href="/sobre">
                <a>
                    <h1>{ children }</h1>
                </a>
            </Link>
        </header>
    )
}

Header.PropTypes = {
    children: PropTypes.node
}

export default Header
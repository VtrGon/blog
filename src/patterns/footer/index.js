import React from 'react'
import PropTypes from 'prop-types'

function Footer({ children }) {
    return (
        <footer>
            { children }
        </footer>
    )
}

Footer.PropTypes = {
    children: PropTypes.node
}

export default Footer
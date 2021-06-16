import React from 'react'
import PropTypes from 'prop-types'

function Typography({ children }) {
    return (
        <p>
            { children }
        </p>
    )
}

Typography.PropTypes = {
    children: PropTypes.node
}

export default Typography
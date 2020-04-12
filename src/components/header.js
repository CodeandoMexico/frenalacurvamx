import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Flags from './flags/flags'
import Navbar from './navbar'

const Header = ({ siteTitle }) => (
    <div className="container">
        <header>
            <Flags />
            <Navbar />
        </header>
    </div>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header

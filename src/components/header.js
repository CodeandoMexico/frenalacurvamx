import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Flags from './flags/flags'
import Navbar from './navbar/navbar'

const Header = ({ siteTitle }) => (
    <header className="Header">
        <Flags />
        <Navbar />
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header

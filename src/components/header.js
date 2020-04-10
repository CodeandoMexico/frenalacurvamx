import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Flags from './flags/flags'

const Header = ({ siteTitle }) => (
    <header>
        <Flags />
        <div>
            <h1>
                <Link to="/" >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header

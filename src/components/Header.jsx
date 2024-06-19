import React from "react"
import kvwnLogo from '../images/kvwn-logo.png'

const Header = () => {

    return (
        <div className="header">
            <img src={kvwnLogo} alt="KVWN NEWS Logo" className="logo"/>
        </div>
    )
}

export default Header
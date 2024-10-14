function Header() {
    return (
        <div>
            <div className="banner">
                <img id="main-photo" src="/LanaDelReyPic.png" alt="Picture of Lana Del Rey"></img>

                <div id="banner-right">
                    <h1 className="oswald-title">LANA DEL REY</h1>
                </div>
            </div>

            <div className="nav-bar">
                <h2 className="center oswald-header">HOME</h2>
                <h2 className="center oswald-header">ALBUMS</h2>
                <h2 className="center oswald-header">TOUR DATES</h2>
            </div>
        </div>
    )
}

export default Header;
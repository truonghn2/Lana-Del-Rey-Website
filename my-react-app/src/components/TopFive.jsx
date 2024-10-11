import "./TopFive.css";
import "./Card.css";
import "../index.css";


function TopTen() {
    return (
        <div>
            <div className="current-top-10-title">
                <h1 className = "center oswald-header">CURRENT TOP 5</h1>
            </div>
            <div className = "container">
                <h1 className = "center oswald-header">#1</h1>
                <h2 className = "center oswald-header">Summertime Sadness</h2>
                <img className = "center album-image" src = "https://i.scdn.co/image/ab67616d0000b273ebc8cfac8b586bc475b04918" alt = "Born to Die Album Cover Art"></img>

                <h1 className = "center oswald-header">#2</h1>
                <h2 className = "center oswald-header">Young and Beautiful</h2>
                <img className = "center album-image" src = "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Young_and_Beautiful_cover_art.jpg/220px-Young_and_Beautiful_cover_art.jpg" alt ="Young and Beautiful Cover Art"></img>

            </div>
        </div>
    )
}


export default TopTen;
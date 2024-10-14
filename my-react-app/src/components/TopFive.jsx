import "./TopFive.css";
import "./Card.css";
import "../index.css";
import React, { useState } from 'react';



function TopFive() {

    //individual states for each hover effect
    const [hoverIndex, setHoverIndex] = useState(null);

    const getStyle = (index) => ({
        color: hoverIndex === index ? 'rgb(187, 56, 78)' : 'black', // Change color only for the hovered element
        cursor: 'pointer',
    });

    return (
        <div>
            <div className="current-top-10-title">
                <h1 className = "oswald-header">CURRENT TOP 5</h1>
            </div>
            <div className = "container">
                <div className = "1">
                    <h1 className = "center oswald-header" style={getStyle(1)} onMouseEnter={() => setHoverIndex(1)} onMouseLeave={() => setHoverIndex(null)} >1. Summertime Sadness</h1>
                </div>
                
                <div className = "2">
                    <h1 className = "center oswald-header" style={getStyle(2)} onMouseEnter={() => setHoverIndex(2)} onMouseLeave={() => setHoverIndex(null)}>2. Young and Beautiful</h1>
                </div>
                
                <div className = "3">
                    <h1 className = "center oswald-header" style={getStyle(3)} onMouseEnter={() => setHoverIndex(3)} onMouseLeave={() => setHoverIndex(null)}>3. Stargirl Interlude</h1>
                </div>
                
                <div className = "4">
                    <h1 className = "center oswald-header" style={getStyle(4)} onMouseEnter={() => setHoverIndex(4)} onMouseLeave={() => setHoverIndex(null)}>4. Young and Beautiful</h1>
                </div>
                
                <div className = "5">
                    <h1 className = "center oswald-header" style={getStyle(5)} onMouseEnter={() => setHoverIndex(5)} onMouseLeave={() => setHoverIndex(null)}>5. Young and Beautiful</h1>
                </div>
                

                <br></br>
                <br></br>
                
                <iframe
                 
                 style={{ borderRadius: "12px" }} 
                 src="https://open.spotify.com/embed/track/2dBwB667LHQkLhdYlwLUZK?utm_source=generator&theme=0" 
                 width="75%" 
                 height="152" frameBorder="0" 
                 allowFullScreen="" 
                 allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                 loading="lazy">
                </iframe>
                
                

            </div>
           
            
        </div>
    )
}

export default TopFive;
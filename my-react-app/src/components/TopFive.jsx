import "./TopFive.css";
import "./Card.css";
import "../index.css";
import React, { useState } from 'react';



function TopFive() {

    // State to track the currently hovered index and the currently selected song index
    const [hoverIndex, setHoverIndex] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null); // New state for selected song

    const getStyle = (index) => ({
        color: hoverIndex === index ? 'rgb(187, 56, 78)' : 'black', // Change color for hovered element
        cursor: 'pointer',
    });

    const songData = [
        {
            title: "1. Summertime Sadness",
            src: "https://open.spotify.com/embed/track/2dBwB667LHQkLhdYlwLUZK?utm_source=generator&theme=0"
        },
        {
            title: "2. Young and Beautiful",
            src: "https://open.spotify.com/embed/track/2nMeu6UenVvwUktBCpLMK9?utm_source=generator&theme=0"
        },
        {
            title: "3. Stargirl Interlude",
            src: "https://open.spotify.com/embed/track/4EDijkJdHBZZ0GwJ12iTAj?utm_source=generator&theme=0"
        },
        {
            title: "4. Video Games",
            src: "https://open.spotify.com/embed/track/24jvD83UgLmrdGjhWTFslY?utm_source=generator&theme=0"
        },
        {
            title: "5. West Coast",
            src: "https://open.spotify.com/embed/track/5Y6nVaayzitvsD5F7nr3DV?utm_source=generator"
        },
    ];

    return (
        <div>
            <div className="current-top-10-title">
                <h1 className="oswald-header">CURRENT TOP 5</h1>
            </div>
            <div className="container">
                {songData.map((song, index) => (
                    <div key={index} className={`song-${index + 1}`}>
                        <h1 
                            className="center oswald-header" 
                            style={getStyle(index)} 
                            onMouseEnter={() => setHoverIndex(index)} 
                            onMouseLeave={() => setHoverIndex(null)} 
                            onClick={() => setSelectedIndex(selectedIndex === index ? null : index)} // Toggle selected index
                        >
                            {song.title}
                        </h1>
                    </div>
                ))}

                <br />
                <br />

                {selectedIndex !== null && ( // Show iframe only if an index is selected
                    <iframe
                        style={{ borderRadius: "12px" }}
                        src={songData[selectedIndex].src}
                        width="75%"
                        height="152"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                )}
            </div>
        </div>
    );
}

export default TopFive;
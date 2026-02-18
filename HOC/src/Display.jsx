import React from 'react'
import './App.css'


const Display = ( pic ) => {
    let card = pic.value

    return (
        <div className="display-container">
            {
                card.map((e, i) => {
                    return (
                        <div key={i} className="card">
                            <img src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} alt="" />
                            <h2>{e.original_title}</h2>
                        </div>
                )
                })
            }
        </div>
    )
}

export default Display

import React from "react";
import { Link } from 'react-router-dom';

/* Import Images from assets */
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBerrImg from "../assets/new-beer.png";

export default function Home() {
    return (
        <div className="home">
            <link className="allBeers" to="/beers">
                <img src={beersImg} alt=""/>
                <p>All Beers</p>
            </link>
        </div>
    )
}
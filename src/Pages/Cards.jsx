import React from "react";
import { NavLink } from "react-router-dom";


const Cards = (props) => {
    return(
        <>
            <div className="col-10 mx-auto col-md-4">
                <div className="card custom-card">
                    <img src={props.imgsrc} className="card-img-top custom-card-img" alt="card" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink href="#" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;

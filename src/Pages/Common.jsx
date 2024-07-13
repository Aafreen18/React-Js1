import React from "react";
import { NavLink } from "react-router-dom";


const Common = (props) => {
    return(
        <>
            <section>
                <div className="conatiner-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>{props.name}<br /><strong className="text-primary"> Aafreen Parveen</strong></h1>
                        <h4 className="my-3">We are team of talented developers making websites.</h4>
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn btn-outline-primary">{props.btnName}</NavLink>
                        </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-end">
                        <img src={props.imgsrc} alt="header-img" className="animated  header-img pt-5" height={"500px"}  />
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>

    );
}

export default Common;
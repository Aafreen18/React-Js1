import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards";

const Service = () =>{
    console.log(Sdata);
    return(
        <>
            <div className="my-5">
                <h3 className="text-center">Our Service</h3>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            { Sdata.map((currVal,idx) => {
                                return( <Cards  key = {idx} imgsrc = {currVal.imgsrc} title = {currVal.title} />)
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Service;
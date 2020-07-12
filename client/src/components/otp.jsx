import React, { useState, useEffect } from 'react';


const Otp = (props) => {
    return(
        <form>                
            <div className="form-group row">
                <label for="inputAmount" className="col-12 col-form-label">Enter PIN</label>
            </div>
            <div className="form-group row">                
                <div className="col-12">
                    <input type="number" className="form-control" id="inputAmount"></input>
                </div>
            </div>
            <div className="form-group row">
                <button className="btn btn-primary col-12">SUBMIT</button>
            </div>
        </form>
    )
}

export default Otp;
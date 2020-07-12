import React, { useState, useEffect } from 'react';

const findCurrencyNumbers = (amount) => {
    const notes = [2000, 500, 200 ,100, 50, 20, 10];
    const currencyCount = [];

    for(let i=0; i<7; i++) {
        if(amount > notes[i]) {
            let noCount = amount/notes[i];
            currencyCount.push({Notes: notes[i], count: Math.trunc(noCount)});
            console.log(amount, notes[i], noCount)
            amount = amount-(notes[i]* Math.trunc(noCount))
            console.log(amount);
        }
    }
    return currencyCount;
}

const WithdrwalDetails = (props) => {
    const queryString = window.location.search;
    const amount = new URLSearchParams(queryString).get('amount');
    const currencyCountLit = findCurrencyNumbers(amount);
    console.log(currencyCountLit);
    return(
        <div className="withdrwal">
            <h2>Withdrwal Details</h2>
            Copy
            <table className="table table-sm">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Note</th>
                <th scope="col">Numbers</th>
                <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                    currencyCountLit.map((item)=> {
                        return(
                            <tr>
                            <th scope="row">{}</th>
                            <td>{item.Notes}</td>
                            <td>{item.count}</td>
                            <td>{item.Notes * item.count}</td>
                            </tr>
                        )                        
                    })
                }
                
               
            </tbody>
            </table>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Total Withdrwal Amount
                    <span className="badge badge-primary badge-pill">{amount}</span>
                </li>               
            </ul>
        </div>
    )
}

export default WithdrwalDetails;
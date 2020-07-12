import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useHistory  } from 'react-router-dom';
import axios from 'axios';

const HomeScreen = (props) => {
    const [amount, setAmount] = useState('');
    const [isAmountValid, setValidation] = useState(false);
    const [modalIsOpen,setIsOpen] = useState(false);
    const [pin, setPinNumber] = useState('');
    const [isPinValid, setisPinValid] = useState(false);
    const history = useHistory();

    const handleChange = (event) => {
        setAmount(event.target.value);
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        if (formValidation) {
            setValidation(false);
            openModal();
        }
        else {
            setValidation(true)
        }
    }

    const formValidation = (amount % 10 === 0) ? true : false;

    const handleModalSubmit = (e) => {
        e.preventDefault();
        const modalFormValidation =  (pin.length === 4) ? true : false;
        if (modalFormValidation) {
            const currencyCountLit = findCurrencyNumbers(amount);
            axios.post(`http://localhost:5000/api/transaction`, { pin: pin,
            amount: amount,
            currencycount: currencyCountLit })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            setisPinValid(false);
            closeModal();

            history.push(`/details/?amount=${amount}`);
        } else {
            setisPinValid(true);
        }
    }

    const findCurrencyNumbers = (amount) => {
        const notes = [2000, 500, 200 ,100, 50, 20, 10];
        const currencyCount = [];
    
        for(let i=0; i<7; i++) {
            if(amount > notes[i]) {
                let noCount = amount/notes[i];
                let totalAmt = (notes[i] * Math.trunc(noCount))
                currencyCount.push({Notes: notes[i], count: Math.trunc(noCount), total: totalAmt});
                console.log(amount, notes[i], noCount)
                amount = amount-(notes[i]* Math.trunc(noCount))
                console.log(amount);
            }
        }
        return currencyCount;
    }

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
    };

    return(
        <>
            <form onSubmit={handleSubmit}>                
                <div className="form-group row">
                    <label for="inputAmount" className="col-12 col-form-label">Amount</label>
                </div>
                <div className="form-group row">                
                    <div className="col-12">
                        <input type="number" onChange={handleChange} className="form-control" id="inputAmount"></input>
                    </div>
                </div>
                {
                    isAmountValid && (
                        <div className="form-group row">                
                            <div className="col-12">
                                <label for="inputAmount" className="col-12 col-form-label">Please Enter Amount Multiple of 10</label>
                            </div>
                        </div>
                    )
                }
                <div className="form-group row">
                    <input type="submit" value="ENTER" className="btn btn-primary col-12" on/>
                </div>
            </form>
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2> Enter PIN Number</h2>
                <form>                     
                    <div className="form-group row">                
                        <div className="col-12">
                            <input type="number" onChange={ (e) => {setPinNumber(e.target.value)}} className="form-control" id="inputAmount"></input>
                        </div>
                    </div>
                    {
                    isPinValid && (
                        <div className="form-group row">                
                            <div className="col-12">
                                <label for="inputAmount" className="col-12 col-form-label">Please Enter 4 Digit Number</label>
                            </div>
                        </div>
                    )
                }
                    <div className="form-group row">
                        <button className="btn btn-primary col-12" onClick={handleModalSubmit}>SUBMIT</button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default HomeScreen;
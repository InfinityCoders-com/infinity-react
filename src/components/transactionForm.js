import React, { Component } from 'react';
import { withRouter } from "react-router";
import '../styles/transaction.css';

class TransactionForm extends Component {
    render(){
        return (
            <div className="form col-xs-6 b-l">
                <div className=''>
                    <div className='form-group row'>
                        <label className='col-xs-3' htmlFor="invoice-for" title='Invoice For'>Invoice For</label>
                        <label className='col-xs-2' htmlFor="Client">Client</label>
                        <div className="col-xs-2">
                            <input className='form-control' type="radio" name="invoice-for" id="invoice-for" value='Client' checked disabled />
                        </div>
                        <label className='col-xs-2' htmlFor="Expense">Expense</label>
                        <div className="col-xs-2">
                            <input className='form-control' type="radio" name="invoice-for" id='invoice-for' value="Expense" disabled />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-xs-3' htmlFor="date-Of-Transaction" title='Date Of Transaction'>Transaction Date</label>
                        <div className="col-xs-9">
                            <input className='form-control' type="date" name="date-Of-Transaction" id="date-Of-Transaction" />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-xs-3' htmlFor="end-of-term" title='Date Of Term End'>End Date</label>
                        <div className="col-xs-9">
                            <input className='form-control' type="date" name="end-of-term" id="end-of-term" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className='col-xs-3' htmlFor="transaction-v">Transaction Name</label>
                        <div className="col-xs-9">
                            <input className='form-control' type="text" name="transaction-v" id="transaction-v" />
                            <div className="transaction-o">
                                <span>SELECT</span>
                                <span>Data is here</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className='col-xs-3' htmlFor="amount">Amount</label>
                        <div className="col-xs-9">
                            <input className='form-control' type="number" name="amount" id="amount" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className='col-xs-3' htmlFor="payee">Payee</label>
                        <div className="col-xs-9">
                            <input className='form-control' type="text" name="payee" id="payee" />
                            <div className="payee">
                                <span>SELECT</span>
                                <span>Data is here</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className='col-xs-3' htmlFor="payer">Payer</label>
                        <div className="col-xs-9">
                            <input className='form-control' type="text" name="payer" id="payer" />
                            <div className="payer">
                                <span>SELECT</span>
                                <span>Data is here</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className='col-xs-3' htmlFor="Debit">Debit</label>
                        <div className="col-xs-3">
                            <input className='form-control' type="radio" name="transaction-type" id="Debit" value='Debit' />
                        </div>
                        <label className='col-xs-3' htmlFor="Credit">Credit</label>
                        <div className="col-xs-3">
                            <input className='form-control' type="radio" name="transaction-type" id='Credit' value="Credit" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className='col-xs-3' htmlFor="details">Details</label>
                        <div className="col-xs-9">
                            <textarea className="form-control" name="details" id="details" rows="5"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(TransactionForm);
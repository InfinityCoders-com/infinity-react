import React, { Component } from 'react';
import { withRouter } from "react-router";
import icLogo from '../assets/logo-ic.svg';

class Invoice extends Component {
    render() {
        return (
            <div className="col-xs-6">
                <div className="invoice-print">
                    <table className='container' cellPadding='0' cellSpacing='0'>
                        <thead>
                            <tr style={{'height':'40px'}}>
                                <th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{'height':'40px'}}>
                                <td colSpan='8'></td>
                                <td colSpan='2' rowSpan='7' style={{'textAlign': 'center'}}>
                                    <img src={icLogo} alt="logo infinity coders" height='70' width='auto' />
                                    <div style={{'letterSpacing': '1.2px', 'color': '#141d32', 'fontWeight': '800', 'fontSize': '18px', 'lineHeight': '18px', 'marginTop': '5px'}}>INFINITY</div>
                                    <div style={{'letterSpacing': '1.2px', 'color': '#141d32', 'fontWeight': '800', 'fontSize': '18px', 'lineHeight': '18px', 'marginBottom': '5px'}}>CODERS</div>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan='3'>Hello! This is your</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan='3' rowSpan='2' style={{'fontSize': '32px', 'letterSpacing': '4px', 'fontWeight': '900'}}>INVOICE</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan='4'>No. 2018112501 02.11.2018</td>
                                <td></td>
                            </tr>
                            <tr style={{'marginTop': '-3px'}}>
                                <td></td>
                                <td colSpan='3'>for <b><i>Shweta Govila</i></b></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{'height':'40px'}}>
                                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr style={{'height':'40px'}}>
                                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr style={{'height': '40px','background': '#141d32', 'color': '#fff'}}>
                                <td></td><td className='upper-triangle'></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr style={{'height': '18px', 'background': '#141d32', 'color': '#fff'}}>
                                <td></td>
                                <td colSpan='3' style={{'borderBottom': '2px solid #fff'}}><i>Work we've done for you</i></td>
                                <td style={{'borderBottom': '2px solid #fff'}}></td>
                                <td style={{'borderBottom': '2px solid #fff'}}></td>
                                <td style={{'borderBottom': '2px solid #fff'}}>Start</td>
                                <td style={{'borderBottom': '2px solid #fff'}}>End</td>
                                <td style={{'borderBottom': '2px solid #fff', 'textAlign': 'right'}}>Cost</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr className='item1' style={{'height': '19px', 'background': '#141d32','color': '#fff'}}>
                                <td></td>
                                <td colSpan='3'>Hosting Single Domain</td>
                                <td></td>
                                <td></td>
                                <td className='start'>25.10.18</td>
                                <td className='end'>31.10.19</td>
                                <td className='amount' style={{'textAlign': 'right'}}>1200</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{'height': '19px', 'background': '#141d32', 'color': '#fff'}}>
                                <td></td>
                                <td colSpan='3'>Domain digitalwriter.in</td>
                                <td></td>
                                <td></td>
                                <td>2.11.18</td>
                                <td>31.10.19</td>
                                <td style={{'textAlign': 'right'}}>600</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{'height': '40px','background': '#141d32','color': '#fff'}}>
                                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr style={{'background': '#141d32','color': '#fff'}}>
                                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr style={{'background': '#141d32','color': '#fff'}}>
                                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr style={{'height': '19px','background': '#141d32','color': '#fff'}}>
                                <td></td>
                                <td style={{'borderTop': '2px solid #fff'}}></td>
                                <td style={{'borderTop': '2px solid #fff'}}></td>
                                <td style={{'borderTop': '2px solid #fff'}}></td>
                                <td style={{'borderTop': '2px solid #fff'}}></td>
                                <td style={{'borderTop': '2px solid #fff'}}></td>
                                <td style={{'borderTop': '2px solid #fff'}}></td>
                                <td style={{'borderTop': '2px solid #fff','textAlign': 'right'}}>Total</td>
                                <td style={{'borderTop': '2px solid #fff','textAlign': 'right'}}>1800</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{'height': '19px','background': '#141d32','color': '#fff'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td colSpan='2' style={{'textAlign': 'right'}}>Total due after</td>
                                <td style={{'textAlign': 'right'}}>5886</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{'background': '#141d32','color': '#fff'}}>
                                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr style={{'height': '40px'}}>
                                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr id='client' style={{'height': '19px'}}>
                                <td></td>
                                <td colSpan='4' style={{'borderBottom':'2px solid #000000'}}><i>Your shopping with us</i></td>
                                <td style={{'borderBottom': '2px solid #000000'}}></td>
                                <td style={{'borderBottom': '2px solid #000000'}}></td>
                                <td style={{'borderBottom': '2px solid #000000'}}></td>
                                <td style={{'borderBottom': '2px solid #000000'}}></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr id='client' style={{'height': '19px'}}>
                                <td></td>
                                <td colSpan='3'>Hosting Single Domain</td>
                                <td></td>
                                <td></td>
                                <td>1.11.18</td>
                                <td>30.10.19</td>
                                <td style={{'textAlign': 'right'}}>1200</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr id='client' style={{'height': '19px'}}>
                                <td></td>
                                <td colSpan='3'>Domain digitalwriter.in</td>
                                <td></td>
                                <td></td>
                                <td>1.11.18</td>
                                <td>11.09.28</td>
                                <td style={{'textAlign': 'right'}}>6486</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr id='client' style={{'height': '40px'}}>
                                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr id='client'>
                                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr id='client'>
                                <td></td>
                                <td colSpan='4' rowSpan='2' style={{'borderTop': '2px solid #000000', 'borderBottom': '2px solid #000000', 'fontSize': '32px', 'letterSpacing': '3px', 'fontWeight': '900'}}>THANK YOU</td>
                                <td style={{'borderTop': '2px solid #000000'}}></td>
                                <td style={{'borderTop': '2px solid #000000'}}></td>
                                <td style={{'borderTop': '2px solid #000000'}}></td>
                                <td style={{'borderTop': '2px solid #000000'}}></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr id='client'>
                                <td></td>
                                <td colSpan='4' style={{'borderBottom': '2px solid #000000'}}>for using <b><i>INFINITY CODERS</i></b></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{'height': '40px'}}>
                                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan='3'><b><i>Questions? Contact Us!</i></b></td>
                                <td></td>
                                <td></td>
                                <td colSpan='3'><b><i>Terms &amp; Conditions</i></b></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan='3'><i>infiniticoder@gmail.com</i></td>
                                <td></td>
                                <td></td>
                                <td colSpan='3' rowSpan='3' style={{'textAlign': 'justify'}}><i>Payment not paid will terminate the service without any notice after Due Date.</i></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan='3'><i>www.infinitycoders.com</i></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr style={{'height': '40px'}}>
                                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr style={{'height':'40px'}}>
                                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="banner-form">
                        <h1>INFINITY CODERS</h1>
                        <h3>INVOICE</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Invoice);
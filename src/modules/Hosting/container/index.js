import React, { Component } from 'react';

class Hosting extends Component {
    render (){
        return (
            <div className='col-xs-12 hosting-module'>
                <div className='row'>
                    <div className='col-xs-12 banner-hosting'>
                        <h1>Shared Hosting</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='container '>
                        <div className='row'>
                            <div className='col-xs-12 payment-card'>
                                <div className='wrapper'>
                                    <h1>Single Web Hosting</h1>
                                    <h2>Rs <code>100.<small>00</small></code>/month</h2>
                                    <button>Get Started</button>
                                    <ul>
                                        <li>1 Website</li>
                                        <li>2 Email Accounts</li>
                                        <li>2 SubDomains</li>
                                        <li>1 FTP Account</li>
                                        <li>1 MySQL Database</li>
                                        <li>10GB SSD Space</li>
                                        <li>100GB BandWidth</li>
                                        <li>Webmail Access</li>
                                        <li>File Manager</li>
                                        <li>99.9% Uptime Guarantee</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hosting;
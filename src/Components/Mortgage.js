import React, { Component } from 'react';
import './Home.css';

import { NavLink } from 'react-router-dom';

export default class Closedend extends Component {
  render() {    
  return (
          <div>
                {/* The section below is for the body of the homepage */}
                <html>
                  <head>
                    <title>Financial Calculadora</title>
                    <link rel="stylesheet" href="styles/styles.css" />
                    <script async src="./javascript/index.js"></script>
                  </head>
                  
                  <body >
                    <br />
                    <h1>This is a Financial Calculator for calculating different things</h1>
                    <br />
                    <h2>This program will be used to calculate loans, CDs, Credit Cards, and Mortgages</h2>
                    <h2>You will also get a visual representation of how your finances will look in x time</h2>
                    <br />
                    <h2>Below, you will see boxes for Closed End, Credit Card, Deposit Account, Mortgage calculators</h2>
                    <br />
                    <h2>Clicking each of the links will open the respective calculator</h2>
                    <br />
                    <h2>This program is a work-in-progress, and lots of styling and functionalities</h2>
                    <h2>are subject to change at any time. Thank you!</h2>
                    <br />

                    <div className= "rectangle">
                      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                      <h1>Closed-End Loans</h1>
                      <br /><br />
                      <h2>This box is for Closed-End Loans, click the</h2>
                      <h2>button below to open the calculator.</h2>
                      <br /><br /><br />
                      <NavLink to="/ClosedEnd"><button onClick = "#Closedend" class = "button"> Click here for the Closed-End Loan Calculator</button></NavLink>
                    </div>

                    <div className= "rectangle">
                      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                      <h1>Credit Card</h1>
                      <br /><br />
                      <h2>This box is for Credit Cards, click the</h2>
                      <h2>button below to open the calculator.</h2>
                      <br /><br /><br />
                      <NavLink to="/CreditCard"><button onClick = "#Creditcard" class = "button"> Click here for the Credit Card Calculator</button></NavLink>
                    </div>

                    <div className= "rectangle">
                      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                      <h1>Deposit Account</h1>
                      <br /><br />
                      <h2>This box is for Deposit Accounts, click the</h2>
                      <h2>button below to open the calculator.</h2>
                      <br /><br /><br />
                      <NavLink to="/DepositAccount"><button onClick = "#Depositaccount" class = "button"> Click here for the Deposit Account Calculator</button></NavLink>
                    </div>
                      
                    <div className= "rectangle">  
                      <form onSubmit={this.handleSubmit}>
                      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                      <h1> Mortgage Loan </h1>
                      <br />
                      <label for="lamount"> Loan Amount </label>
                      <input type="text" id="lamount" name="mlamount" placeholder="Enter Loan Amount"
                      onChange={(e) => this.setState({ mlamount: e.target.value })}/><br />
                      <label for="lterm"> Loan Term </label>
                      <input type="text" id="lterm" name="mlterm" placeholder="Enter Loan Term (months)"
                      onChange={(e) => this.setState({ mlterm: e.target.value })}/><br />
                      <label for="irate"> Interest Rate </label>
                      <input type="text" id="irate" name="mirate" placeholder="Enter Interest Rate"
                      onChange={(e) => this.setState({ mirate: e.target.value })}/><br />
                      <label for="bcost"> Backend Cost </label>
                      <input type="text" id="bcost" name="mbcost" placeholder="Enter Backend Cost"
                      onChange={(e) => this.setState({ mbcost: e.target.value })}/><br />
                      <br />
                      <button type="submit" class = "button">
                        Submit
                      </button>
                      </form>
                    </div>
                  </body>    
                </html>
          </div>
    );
  }
}
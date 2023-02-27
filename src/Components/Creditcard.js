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
                      <form onSubmit={this.handleSubmit}>
                      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <h1> Credit Card </h1>
                        <br />
                        <label for="bal"> Balance </label>
                        <input type="text" id="bal" name="ccbal" placeholder="Enter Balance"
                        onChange={(e) => this.setState({ ccbal: e.target.value })}/><br />
                        <label for="apr"> APR </label>
                        <input type="text" id="apr" name="ccapr" placeholder="Enter APR"
                        onChange={(e) => this.setState({ ccapr: e.target.value })}/><br />
                        <br /><br />
                        <button type="submit" class = "button">
                            Submit
                          </button>
                        <br />
                      </form>
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
                      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                      <h1>Mortgage Loan</h1>
                      <br /><br />
                      <h2>This box is for Mortgages, click the</h2>
                      <h2>button below to open the calculator.</h2>
                      <br /><br /><br />
                      <NavLink to="/Mortgage"><button onClick = "#Mortgage" class = "button"> Click here for the Mortgage Calculator</button></NavLink>
                    </div>
                  </body>    
                </html>
          </div>
    );
  }
}
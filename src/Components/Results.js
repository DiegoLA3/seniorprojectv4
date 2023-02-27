import React, { Component } from 'react'
import  './Calculate.css';

export default class Calculate extends Component {
  constructor(props){
    super(props)
    this.state={
      ctotal: '',
      cctotal: '',
      dtotal: '',
      mtotal: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { ctotal, cctotal, dtotal, mtotal} = this.state;
    console.log(ctotal, cctotal, dtotal, mtotal);
    fetch("http://localhost:5000/financialdata", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        ctotal, cctotal, dtotal, mtotal
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data,"FinancialData");
      });

  }
  
  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>

        <br />
        <h2> Closed-End Loan </h2>
          <label for="lamount"> Loan Amount </label>
          <input type="text" id="lamount" name="clamount"placeholder="Enter Loan Amount" 
          onChange={(e) => this.setState({ clamount: e.target.value })}/><br />
          <label for="lterm"> Loan Term </label>
          <input type="text" id="lterm" name="clterm" placeholder="Enter Loan Term (months)"
          onChange={(e) => this.setState({ clterm: e.target.value })}/><br />
          <label for="irate"> Interest Rate </label>
          <input type="text" id="irate" name="cirate" placeholder="Enter Interest Rate"
          onChange={(e) => this.setState({ cirate: e.target.value })}/><br />
          <label for="bcost"> Backend Cost </label>
          <input type="text" id="bcost" name="cbcost" placeholder="Enter (optional) Backend Cost"
          onChange={(e) => this.setState({ cbcost: e.target.value })}/><br />
          <input type="text" id="ctotal" name="cbcost" placeholder="Enter (optional) Backend Cost"
          onChange={(e) => this.setState({ cbcost: e.target.value })}/><br />
          <br />

        <h2> Credit Card </h2>
          <label for="bal"> Balance </label>
          <input type="text" id="bal" name="ccbal" placeholder="Enter Balance"
          onChange={(e) => this.setState({ ccbal: e.target.value })}/><br />
          <label for="apr"> APR </label>
          <input type="text" id="apr" name="ccapr" placeholder="Enter APR"
          onChange={(e) => this.setState({ ccapr: e.target.value })}/><br />
          <br />

        <h2> Deposit Account </h2>
          <label for="amt"> Amount </label>
          <input type="text" id="amt" name="damt" placeholder="Enter Deposit Amount"
          onChange={(e) => this.setState({ damt: e.target.value })}/><br />
          <label for="apy"> APY </label>
          <input type="text" id="apy" name="dapy" placeholder="Enter APY"
          onChange={(e) => this.setState({ dapy: e.target.value })}/><br />
          <label for="term"> Term </label>
          <input type="text" id="term" name="dterm" placeholder="Enter (optional) Term (months)"
          onChange={(e) => this.setState({ dterm: e.target.value })}/><br />
          <br />

        <h2> Mortgage Loan </h2>
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
          <button type="submit">
            Submit
          </button>

      </form>
    )
  }

}


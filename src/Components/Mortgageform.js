import React, { useEffect, useState } from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend } from "recharts";
import FormInputGroup from "./FormInputGroup";
import './Home.css'

function Form() {
 
  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function calculateLoanAmount() {
    
    setLoanAmount(homeValue - downPayment);
    return loanAmount;
  }
  
  function calculateMonthlyPayment() {
    // Percentage conversion
    function percentageToDecimal(percent) {
      return percent / 12 / 100;
    }
    
    // years to month conversion
    function yearsToMonths(year) {
      return year * 12;
    }
    
    setMonthlyPayment(
      (percentageToDecimal(interestRate) * loanAmount) /
      (1 -
        Math.pow(
          1 + percentageToDecimal(interestRate),
          -yearsToMonths(loanDuration)
          ))
          );
          
          return monthlyPayment;
          
          
        }
        
        
        const [data, setData] = useState([])
        
        useEffect(()=>{
    const newData = []
    for (let i = 0; i<=360;i++) {
      newData.push({
        month:i+1,
        temp: (Math.floor(500000 -monthlyPayment*i ) ).toFixed(2),
        // humidity: (Math.random() * 10 +10).toFixed(2)
      })
    }
    setData(newData)
  }, [])
  
  return (
    
    <form onSubmit={(e) => e.preventDefault()}>
      <FormInputGroup
        text="Home Value "
        placeholder={"Enter the value of the home"}
        value={homeValue}
        onInput={(e) => setHomeValue(e.target.value)}
        onkeyup={calculateLoanAmount}
        />
      <FormInputGroup
        text="Down payment"
        placeholder={"Enter your funds"}
        value={downPayment}
        onInput={(e) => setDownPayment(e.target.value)}
        onkeyup={calculateLoanAmount}
        />
      <FormInputGroup
        text="Loan amount"
        placeholder={"Enter your funds"}
        readOnly={true}
        value={loanAmount}
        />
      <FormInputGroup
        text="Interest Rate %"
        placeholder={"Enter your interest rate"}
        value={interestRate}
        onInput={(e) => setInterestRate(e.target.value)}
      />
      <FormInputGroup
        text="Loan Duration (years)"
        placeholder={"Enter the duration of your loan in years"}
        value={loanDuration}
        onInput={(e) => setLoanDuration(e.target.value)}
      />
      <h4 className="alert alert-info fw-bold">
        Monthly payment:
        {parseFloat(monthlyPayment.toFixed(2))}
      </h4>

      <div>
        <LineChart className="LineChart" data={data} width={500} height={500}>
          <XAxis dataKey={"month"} />
          <YAxis domain={[0,500000]} type="number"/>
          <CartesianGrid stroke="black" strokeDasharray="5 5"/>
          <Line dataKey={"temp"} stroke="Purple" strokeWidth={3}/>
        </LineChart>
      </div>
      <button
        type="submit"
        onClick={calculateMonthlyPayment}
        
      >
        Calculate
      </button>
    </form>
  );
}

export default Form;
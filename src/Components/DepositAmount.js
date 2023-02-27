import * as React from "react";
import ReactDOM from "react-dom";

import VariablesForm from "./VariableForm";
import CompoundInterestChart from "./Depositaccountform";

import defaultState from "./defaultState";

function DepositAccount() {
  const [state, setState] = React.useState(defaultState);

  return (
    <div id="annualCompoundCalculator">
      <h1 className="text-center">Annual Compound Interest Calculator</h1>
      <hr />
      <VariablesForm onUpdate={variables => setState(variables)} />
      <hr />
      <CompoundInterestChart {...state} />
    </div>
  );
}

export default DepositAccount
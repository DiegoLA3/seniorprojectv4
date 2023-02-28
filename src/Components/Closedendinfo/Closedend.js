import * as React from "react";
import ReactDOM from "react-dom";

import VariablesForm from "./CeVariableForm";
import ClosedEndChart from "./Closedendform";

import defaultState from "./CeDefaultState";

function ClosedEnd() {
  const [state, setState] = React.useState(defaultState);

  return (
    <div id="closedEndCalculator">
      <h1 className="text-center">Closed-End Loan Calculator</h1>
      <hr />
      <VariablesForm onUpdate={variables => setState(variables)} />
      <hr />
      <ClosedEndChart {...state} />
    </div>
  );
}

export default ClosedEnd;

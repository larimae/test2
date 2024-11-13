import { useState } from "react";

interface CalculatorState {
  total: number;
  previousTotal: number;
}

export default function Calculator() {
  const [calcState, setCalcState] = useState<CalculatorState>({ total: 0, previousTotal: 0 });
  const [value, setValue] = useState(0);

  const handleAddClick = () => {
    setCalcState({ total: calcState.total + value, previousTotal: calcState.total});
  };

  return (
    <div className="calculator">
      <p>
        <input 
          type="text" 
          id="value" 
          value="0" 
          name="value">
        </p>
          <button class="btn btn-primary" type="button"> Add </button>
          <p class="card-text">Total: 0</p>
          <p class="card-text">Previous Total: 0</p>
    </div>
  )
}

// rrd
import { Form } from "react-router-dom";

// library
import { CurrencyEuroIcon } from "@heroicons/react/24/solid";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">
        <Form method="post" className="grid-sm">
          <label htmlfor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
          ></input>
          <div className="grid-xs">
            <label htmlFor="newBudgetAmount">Amount</label>
            <input
              type="number"
              step="0.01"
              name="newBudgetAmount"
              placeholder="e.g., €350"
              required
              inputMode="decimal"
            ></input>
          </div>
          <button type="submit" className="btn btn--dark">
            <span>Create budget</span>
            <CurrencyEuroIcon width={20} />
          </button>
        </Form>
      </h2>
    </div>
  );
};

export default AddBudgetForm;

import * as React from 'react';

import { Stock } from './stock';

export interface ChartProps {
  stocks: string[];
  onAddStock: (stock: string) => void;
  onRemoveStock: (stock: string) => void;
}

export const Chart = ({ stocks, onAddStock, onRemoveStock}: ChartProps, newStock: HTMLInputElement) => (
  <div>
    <form
      className="jumbotron form-inline"
      onSubmit={(event) => {
          event.preventDefault();
          if (newStock.value !== '') {
            onAddStock(newStock.value);
            newStock.value = '';
          } else {
            // TODO: create form validation error
          }
      }}
    >
      <div className="form-group">
        <label htmlFor="stockadd">Stock to Add</label>
        <input
          className="form-control"
          name="stockadd"
          ref={node => (
              newStock = node as HTMLInputElement
          )}
        />
      </div>
      <button
        type="submit"
        className="btn btn-success"
      >
        Add Stock
      </button>
    </form>
    <ul className="list-group">
      {stocks.map((name: string, id: number) => (
          <Stock key={id} {...{name, id, onRemoveStock}} />
      ))}
    </ul>
  </div>
);

export default Chart;
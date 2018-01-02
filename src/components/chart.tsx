import * as React from 'react';

import { Stock } from './stock';
import { Header } from './header';

export interface ChartProps {
  stocks: string[];
  onAddStock: (stock: string) => void;
  onRemoveStock: (stock: string) => void;
}

export const Chart = ({ stocks, onAddStock, onRemoveStock}: ChartProps, stockToAdd: HTMLInputElement) => (
  <div>
    <Header {...{stockToAdd, onAddStock}}/>
    <div className="container">
      <ul className="list-group col-sm-6">
        {stocks.map((name: string, id: number) => (
            <Stock key={id} {...{name, id, onRemoveStock}} />
        ))}
      </ul>
    </div>
  </div>
);

export default Chart;
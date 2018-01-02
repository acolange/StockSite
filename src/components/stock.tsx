import * as React from 'react';

export interface StockProps {
    name: string;
    id: number;
    onRemoveStock: (stock: string) => void;
}

export const Stock = ({name, id, onRemoveStock}: StockProps) => (
    <li className="list-group-item text-uppercase">
        <strong>{id + 1}.</strong> {name}
        <span 
            onClick={(event) => onRemoveStock(name)} 
            className="glyphicon glyphicon-remove btn"
        />
    </li>
);

export default Stock;
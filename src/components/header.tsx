import * as React from 'react';

export interface HeaderProps {
  stockToAdd: HTMLInputElement;
  onAddStock: (stock: string) => void;
}

export const Header = ({stockToAdd, onAddStock}: HeaderProps) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <form
        className="navbar-form navbar-left"
        onSubmit={(event) => {
          event.preventDefault();
          if (stockToAdd.value !== '') {
            onAddStock(stockToAdd.value);
            stockToAdd.value = '';
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
                stockToAdd = node as HTMLInputElement
            )}
          />
        </div>
        <button
          type="submit"
          className="btn"
        >
          Add Stock
        </button>
      </form>
    </div>
  </nav>
);

export default Header;
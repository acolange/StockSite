import { Chart } from '../components/chart';
import * as actions from '../actions/chart';
import { ChartState } from '../types/chart';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({stocks}: ChartState) {
  return {
    stocks
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ChartAction>) {
  return {
    onAddStock: (stock: string) => dispatch(actions.addStock(stock)),
    onRemoveStock: (stock: string) => dispatch(actions.removeStock(stock)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
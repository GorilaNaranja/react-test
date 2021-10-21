import { colors } from '../../utils/utils';

const NumberKeyboard = (props) => (
  <button
    className='number'
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

export default NumberKeyboard;

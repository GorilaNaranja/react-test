import { utils } from '../../utils/utils';

const StarsDisplay = (props) =>
  utils
    .range(1, props.count)
    .map((starId) => <div key={starId} className='star'></div>);

export default StarsDisplay;

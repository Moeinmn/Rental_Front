'use client';

import { 
  DateRange, 
  Range, 
  RangeKeyDict
} from 'react-date-range';

import { faIR } from 'react-date-range/dist/locale';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface DatePickerProps {
  value: Range,
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const DatePicker: React.FC<any> = ({
  value,
  onChange,
  disabledDates
}) => {
  return ( 
    <DateRange
      //locale={faIR}
      rangeColors={['#262626']}
      // ranges={[value]}
      date={new Date()}
      // onChange={onChange}
      direction="vertical"
      //showDateDisplay={false}
      //minDate={new Date()}
      // disabledDates={disabledDates}
    />
   );
}
 
export default DatePicker;

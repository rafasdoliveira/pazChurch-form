/* eslint-disable react/prop-types */
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const FormDatePicker = ({ label, value, onChange, }) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
}

export default FormDatePicker;





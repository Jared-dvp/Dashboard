import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";    


interface DatePickerProps {
    label: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
}

function DatePicker({label, value, onChange}: DatePickerProps) {
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MuiDatePicker
        label={label}
        value={value}
        onChange={onChange}
        format="dd/MM/yyyy"
        >
        </MuiDatePicker>
    </LocalizationProvider>
    </>
  )
}
export default DatePicker;

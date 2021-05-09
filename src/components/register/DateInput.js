import React from "react";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ inputDate, onChange }) => {
  return (
    <form className="dateInput">
      <DatePicker
        id="datePicker"
        locale={ko}
        selected={inputDate[0]}
        closeOnScroll={true}
        minDate={new Date("1950/01/01")}
        popperModifiers={{ preventOverflow: { enabled: true } }}
        onChange={onChange}
        placeholderText="생년월일을 입력해주세요."
        dateFormat="yyyy.MM.dd"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    </form>
  );
};

export default DateInput;

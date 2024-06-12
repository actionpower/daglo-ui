import * as React from 'react';
import { DatePicker, DatePickerWithRange } from '@/src/components';
import dayjs, { Dayjs } from 'dayjs';

const DatePickerDemo = () => {
  const defaultValue = dayjs();
  const [value, setValue] = React.useState<Dayjs>(defaultValue);
  const defaultStartValue = dayjs();
  const defaultEndValue = dayjs();

  const [rangeValue, setRangeValue] = React.useState<
    [Dayjs | null, Dayjs | null] | null
  >([defaultStartValue, defaultEndValue]);

  const onChange = (date: Dayjs | Dayjs[]) => {
    setValue(date as Dayjs);
  };

  const onRangeChange = (
    newValue: [Dayjs | null, Dayjs | null] | null,
    formatStrings?: string[],
  ) => {
    console.log('Change:', newValue, formatStrings);
    setRangeValue(newValue);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div>
        Date Picker
        <DatePicker
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
        />
      </div>
      <div>
        Date Picker with time
        <DatePicker
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          isShowTime
        />
      </div>
      <div>
        Date Picker with Range
        <DatePickerWithRange
          onRangeChange={onRangeChange}
          rangeValue={rangeValue}
        />
      </div>
      <div>
        Date Picker with Range and time
        <DatePickerWithRange
          isShowTime
          onRangeChange={onRangeChange}
          rangeValue={rangeValue}
        />
      </div>
    </div>
  );
};

export default DatePickerDemo;

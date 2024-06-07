import { Dayjs } from 'dayjs';
import { RangePicker } from 'rc-picker';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import ko_KR from 'rc-picker/lib/locale/ko_KR';
import '../../calendarStyle.css';

interface DatePickerWithRangeProps {
  isShowTime?: boolean;
  defaultStartValue?: Dayjs;
  defaultEndValue?: Dayjs;
  placeholder?: [string, string];
  rangeValue: [Dayjs | null, Dayjs | null] | null;
  onRangeChange: (
    newValue: [Dayjs | null, Dayjs | null] | null,
    formatStrings?: string[],
  ) => void;
}

const DatePickerWithRange = ({
  isShowTime,
  placeholder = ['Pick Date', 'Pick Date'],
  rangeValue,
  onRangeChange,
}: DatePickerWithRangeProps) => {
  const rangeSharedProps = {
    generateConfig: dayjsGenerateConfig,
    value: rangeValue,
    onChange: onRangeChange,
  };

  return (
    <div>
      <RangePicker
        {...rangeSharedProps}
        placeholder={placeholder}
        locale={ko_KR}
        allowClear
        showTime={isShowTime}
        inputReadOnly
      />
    </div>
  );
};

export default DatePickerWithRange;

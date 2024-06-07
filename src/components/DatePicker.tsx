import { Dayjs } from 'dayjs';
import { Picker } from 'rc-picker';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import ko_KR from 'rc-picker/lib/locale/ko_KR';
import '../../calendarStyle.css';

interface DatePickerProps {
  defaultValue: Dayjs;
  value: Dayjs;
  onChange: (date: Dayjs | Dayjs[], dateString?: string | string[]) => void;
  isShowTime?: boolean;
  placeholder?: string;
}

const DatePicker = ({
  value,
  defaultValue,
  onChange,
  placeholder = 'Pick Date',
  isShowTime = false,
}: DatePickerProps) => {
  const sharedProps = {
    generateConfig: dayjsGenerateConfig,
    onChange,
    value,
  };

  return (
    <Picker
      placeholder={placeholder}
      {...sharedProps}
      locale={ko_KR}
      defaultPickerValue={defaultValue}
      onKeyDown={(e) => [e.preventDefault()]}
      showTime={isShowTime}
      inputReadOnly
    />
  );
};

export default DatePicker;

import dayjs, { Dayjs } from 'dayjs';
import { Picker } from 'rc-picker';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import ko_KR from 'rc-picker/lib/locale/ko_KR';
import React from 'react';
import '../../calendarStyle.css';

const DatePicker = () => {
  const defaultValue = dayjs();
  // const defaultStartValue = dayjs('2019-09-03 05:02:03');
  // const defaultEndValue = dayjs('2019-11-28 01:02:03');

  const [value, setValue] = React.useState<Dayjs>(defaultValue);
  // const [rangeValue, setRangeValue] = React.useState<
  //   [Dayjs | null, Dayjs | null] | null
  // >([defaultStartValue, defaultEndValue]);

  const onSelect = (newValue: Dayjs) => {
    console.log('Select:', newValue);
  };

  const onChange = (date: Dayjs | Dayjs[], dateString?: string | string[]) => {
    console.log('Change:', date, dateString);
    setValue(date as Dayjs);
  };

  const sharedProps = {
    generateConfig: dayjsGenerateConfig,
    value,
    onSelect,
    onChange,
  };

  // const onRangeChange = (
  //   newValue: [Moment | null, Moment | null] | null,
  //   formatStrings?: string[],
  // ) => {
  //   console.log('Change:', newValue, formatStrings);
  //   setRangeValue(newValue);
  // };

  // const rangeSharedProps = {
  //   generateConfig: momentGenerateConfig,
  //   value: rangeValue,
  //   onChange: onRangeChange,
  // };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ margin: '0 8px' }}>
          <Picker
            {...sharedProps}
            locale={ko_KR}
            defaultPickerValue={defaultValue.clone().subtract(1, 'month')}
            showTime
            showToday
            // disabledTime={(date) => {
            //   // if (date && date.isSame(defaultValue, 'date')) {
            //   //   return {
            //   //     disabledHours: () => [1, 3, 5, 7, 9, 11],
            //   //   };
            //   // }
            //   return {};
            // }}
            changeOnBlur
          />
        </div>
        {/* <div style={{ margin: '0 8px' }}>
          <h3>Range</h3>
          <h4>
            RangeValue:{' '}
            {rangeValue
              ? `${formatDate(rangeValue[0])} ~ ${formatDate(rangeValue[1])}`
              : 'null'}
          </h4>
          <RangePicker<Moment>
            {...rangeSharedProps}
            locale={zhCN}
            allowClear
            showTime
            style={{ width: 580 }}
            cellRender={(current: Moment, info) => {
              return (
                <div
                  title={info.type}
                  style={{
                    background: info.type === 'time' ? 'green' : 'yellow',
                  }}
                >
                  {info.type === 'time' ? current : current.get('date')}
                </div>
              );
            }}
            ranges={{
              ranges: [moment(), moment().add(10, 'day')],
            }}
            onOk={(dates) => {
              console.log('OK!!!', dates);
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default DatePicker;

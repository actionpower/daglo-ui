import type { Moment } from 'moment';
import moment from 'moment';
import { Picker, RangePicker } from 'rc-picker';
import '../../calendarStyle.css';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import zhCN from 'rc-picker/lib/locale/zh_CN';
import React from 'react';

const defaultValue = moment('2019-11-28 01:02:03');

const DatePickerWithRange = () => {
  const defaultValue = moment('2019-11-28 01:02:03');
  const defaultStartValue = moment('2019-09-03 05:02:03');
  const defaultEndValue = moment('2019-11-28 01:02:03');

  function formatDate(date: Moment | null) {
    return date ? date.format('YYYY-MM-DD HH:mm:ss') : 'null';
  }

  const [value, setValue] = React.useState<Moment | null>(defaultValue);
  const [rangeValue, setRangeValue] = React.useState<
    [Moment | null, Moment | null] | null
  >([defaultStartValue, defaultEndValue]);

  const onSelect = (newValue: Moment) => {
    console.log('Select:', newValue);
  };

  const onChange = (newValue: Moment | null, formatString?: string) => {
    console.log('Change:', newValue, formatString);
    setValue(newValue);
  };

  const sharedProps = {
    generateConfig: momentGenerateConfig,
    value,
    onSelect,
    onChange,
  };

  const onRangeChange = (
    newValue: [Moment | null, Moment | null] | null,
    formatStrings?: string[],
  ) => {
    console.log('Change:', newValue, formatStrings);
    setRangeValue(newValue);
  };

  const rangeSharedProps = {
    generateConfig: momentGenerateConfig,
    value: rangeValue,
    onChange: onRangeChange,
  };

  const keyDown = (e, preventDefault) => {
    if (e.keyCode === 13) preventDefault();
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ margin: '0 8px' }}>
          <h3>Basic</h3>
          <h4>Value: {value ? value.format('YYYY-MM-DD HH:mm:ss') : 'null'}</h4>
          <Picker<Moment>
            {...sharedProps}
            locale={zhCN}
            defaultPickerValue={defaultValue.clone().subtract(1, 'month')}
            showTime={{
              defaultValue: moment('11:28:39', 'HH:mm:ss'),
            }}
            showToday
            disabledTime={(date) => {
              if (date && date.isSame(defaultValue, 'date')) {
                return {
                  disabledHours: () => [1, 3, 5, 7, 9, 11],
                };
              }
              return {};
            }}
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

export default DatePickerWithRange;

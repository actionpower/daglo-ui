import { parseISO } from 'date-fns';
import Picker from 'rc-picker';
import React from 'react';

import dayjs from 'dayjs';
import 'rc-picker/assets/index.css';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import enUS from 'rc-picker/lib/locale/en_US';

export default function DatePicker() {
  const defaultValue = parseISO('2021-08-10');
  const rangeFrom = dayjs('2021-08-13');
  const rangeTo = dayjs('2021-08-19');

  const [value, setValue] = React.useState<Date | null>(defaultValue);

  const onSelect = (newValue: Date) => {
    console.log('Select:', newValue);
  };

  const onChange = (newValue: Date | null, formatString?: string) => {
    console.log('Change:', newValue, formatString);
    setValue(newValue);
  };
  const sharedProps = {
    generateConfig: dateFnsGenerateConfig,
    value,
    onSelect,
    onChange,
  };

  return (
    <div className="App">
      <h3>Basic</h3>
      <Picker
        {...sharedProps}
        locale={enUS}
        defaultValue={defaultValue}
        ranges={[rangeFrom, rangeTo]}
      />
    </div>
  );
}

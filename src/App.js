import React from 'react';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
  const data = [
    {
      name: 'London',
      month: 'Jan.',
      paramOne: 18.9,
    },
    {
      name: 'London',
      month: 'Feb.',
      paramOne: 28.8,
    },
    {
      name: 'London',
      month: 'Mar.',
      paramOne: 39.3,
    },
    {
      name: 'London',
      month: 'Apr.',
      paramOne: 81.4,
    },
    {
      name: 'London',
      month: 'May',
      paramOne: 47,
    },
    {
      name: 'London',
      month: 'Jun.',
      paramOne: 20.3,
    },
    {
      name: 'London',
      month: 'Jul.',
      paramOne: 24,
    },
    {
      name: 'London',
      month: 'Aug.',
      paramOne: 35.6,
    },
    {
      name: 'Berlin',
      month: 'Jan.',
      paramOne: 12.4,
    },
    {
      name: 'Berlin',
      month: 'Feb.',
      paramOne: 23.2,
    },
    {
      name: 'Berlin',
      month: 'Mar.',
      paramOne: 34.5,
    },
    {
      name: 'Berlin',
      month: 'Apr.',
      paramOne: 99.7,
    },
    {
      name: 'Berlin',
      month: 'May',
      paramOne: 52.6,
    },
    {
      name: 'Berlin',
      month: 'Jun.',
      paramOne: 35.5,
    },
    {
      name: 'Berlin',
      month: 'Jul.',
      paramOne: 37.4,
    },
    {
      name: 'Berlin',
      month: 'Aug.',
      paramOne: 42.4,
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: 'month',
    yField: 'paramOne',
    seriesField: 'name',

    /** set color */
    color: ['#0E6FFE','#DB3644'],

    /** set spacing */
    marginRatio: 0.8,
    // label: {
    //   position: 'middle',
    //   // 'top', 'middle', 'bottom'
    //   layout: [
    //     // The position of the column chart data label is automatically adjusted
    //     {
    //       type: 'interval-adjust-position',
    //     }, // Data label anti-masking
    //     {
    //       type: 'interval-hide-overlap',
    //     }, // Data label text color automatic adjustment
    //     {
    //       type: 'adjust-color',
    //     },
    //   ],
    // },
  };
  return <Column {...config} />;
};

export default DemoColumn;
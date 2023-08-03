import { useState } from 'react';

interface Weather {
  Wx: 
}

const baseUrl = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001';
const token = process.env.EXPO_PUBLIC_CWB_API_TOKEN;

const useCurrentWeather = (locationName: string[]) => {
  const [] = useState();

  const queryParams = {
    Authorization: token,
    locationName: locationName,
  };
  const weatherElement = [
    {
      elementName: 'Wx',
      time: [
        {
          startTime: '2023-08-04 00:00:00',
          endTime: '2023-08-04 06:00:00',
          parameter: {
            parameterName: '陰陣雨或雷雨',
            parameterValue: '18',
          },
        },
        {
          startTime: '2023-08-04 06:00:00',
          endTime: '2023-08-04 18:00:00',
          parameter: {
            parameterName: '多雲時陰',
            parameterValue: '5',
          },
        },
        {
          startTime: '2023-08-04 18:00:00',
          endTime: '2023-08-05 06:00:00',
          parameter: {
            parameterName: '多雲短暫陣雨或雷雨',
            parameterValue: '15',
          },
        },
      ],
    },
    {
      elementName: 'PoP',
      time: [
        {
          startTime: '2023-08-04 00:00:00',
          endTime: '2023-08-04 06:00:00',
          parameter: {
            parameterName: '70',
            parameterUnit: '百分比',
          },
        },
        {
          startTime: '2023-08-04 06:00:00',
          endTime: '2023-08-04 18:00:00',
          parameter: {
            parameterName: '20',
            parameterUnit: '百分比',
          },
        },
        {
          startTime: '2023-08-04 18:00:00',
          endTime: '2023-08-05 06:00:00',
          parameter: {
            parameterName: '60',
            parameterUnit: '百分比',
          },
        },
      ],
    },
    {
      elementName: 'MinT',
      time: [
        {
          startTime: '2023-08-04 00:00:00',
          endTime: '2023-08-04 06:00:00',
          parameter: {
            parameterName: '27',
            parameterUnit: 'C',
          },
        },
        {
          startTime: '2023-08-04 06:00:00',
          endTime: '2023-08-04 18:00:00',
          parameter: {
            parameterName: '27',
            parameterUnit: 'C',
          },
        },
        {
          startTime: '2023-08-04 18:00:00',
          endTime: '2023-08-05 06:00:00',
          parameter: {
            parameterName: '27',
            parameterUnit: 'C',
          },
        },
      ],
    },
    {
      elementName: 'CI',
      time: [
        {
          startTime: '2023-08-04 00:00:00',
          endTime: '2023-08-04 06:00:00',
          parameter: {
            parameterName: '舒適',
          },
        },
        {
          startTime: '2023-08-04 06:00:00',
          endTime: '2023-08-04 18:00:00',
          parameter: {
            parameterName: '舒適至悶熱',
          },
        },
        {
          startTime: '2023-08-04 18:00:00',
          endTime: '2023-08-05 06:00:00',
          parameter: {
            parameterName: '舒適至悶熱',
          },
        },
      ],
    },
    {
      elementName: 'MaxT',
      time: [
        {
          startTime: '2023-08-04 00:00:00',
          endTime: '2023-08-04 06:00:00',
          parameter: {
            parameterName: '28',
            parameterUnit: 'C',
          },
        },
        {
          startTime: '2023-08-04 06:00:00',
          endTime: '2023-08-04 18:00:00',
          parameter: {
            parameterName: '31',
            parameterUnit: 'C',
          },
        },
        {
          startTime: '2023-08-04 18:00:00',
          endTime: '2023-08-05 06:00:00',
          parameter: {
            parameterName: '30',
            parameterUnit: 'C',
          },
        },
      ],
    },
  ];
};

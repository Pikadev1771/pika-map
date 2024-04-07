import { useCallback, useEffect, useState } from 'react';
import { Scheduler, SchedulerData } from '@bitnoi.se/react-scheduler';
import '@bitnoi.se/react-scheduler/dist/style.css';

type ParsedDatesRange = {
  startDate: Date;
  endDate: Date;
};

export default function Calendar() {
  const [isLoading, setIsLoading] = useState(false);
  //   const [range, setRange] = useState<ParsedDatesRange>({
  //     startDate: new Date('2024-04-01T15:31:24.272Z'),
  //     endDate: new Date('2024-04-04T10:28:22.649Z'),
  //   });

  const data: SchedulerData = [
    {
      id: '070ac5b5-8369-4cd2-8ba2-0a209130cc60',
      label: {
        icon: 'https://picsum.photos/24',
        title: '박경현',
        subtitle: 'Frontend Developer',
      },
      data: [
        {
          id: '8b71a8a5-33dd-4fc8-9caa-b4a584ba3762',
          startDate: new Date('2024-04-03T15:31:24.272Z'),
          endDate: new Date('2024-04-04T10:28:22.649Z'),
          occupancy: 3600,
          title: 'Project A',
          subtitle: 'Subtitle A',
          description: 'array indexing Salad West Account',
          bgColor: 'rgb(254,165,177)',
        },
        {
          id: '22fbe237-6344-4c8e-affb-64a1750f33bd',
          startDate: new Date('2024-04-04T15:31:24.272Z'),
          endDate: new Date('2024-04-05T10:28:22.649Z'),
          occupancy: 2852,
          title: 'Project B',
          subtitle: 'Subtitle B',
          description: 'Tuna Home pascal IP drive',
          bgColor: 'rgb(254,103,177)',
        },
      ],
    },
  ];

  const [range, setRange] = useState<ParsedDatesRange>({
    startDate: new Date(),
    endDate: new Date(),
  });

  useEffect(() => {
    setIsLoading(true);

    // fetching data

    setIsLoading(false);
  }, []);

  const handleRangeChange = useCallback((range: ParsedDatesRange) => {
    // setRange(range);

    console.log('range', range);
  }, []);

  return (
    <Scheduler
      // decide when to show loading indicators
      isLoading={isLoading}
      // your data
      data={data}
      // callback when user click's on one of the grid's tile
      onItemClick={(clickedItem) => console.log(clickedItem)}
      // filter function that let's you handling filtering on your end
      onFilterData={() => {
        // filter your data
      }}
      // callback when user clicks clearing filter button
      onClearFilterData={() => {
        // clear all your filters
      }}
      onRangeChange={handleRangeChange}
      config={{
        /* 
            change filter button state based on your filters
            < 0 - filter button invisible,
            0 - filter button visible, no filter applied, clear filters button invisible,
            > 0 - filter button visible, filters applied (clear filters button will be visible)
          */
        filterButtonState: 0,
        // decide start zoom variant (0 - weeks, 1 - days)
        zoom: 1,
        // select language for scheduler
        lang: 'en',
        // decide how many resources show per one page
        maxRecordsPerPage: 20,
      }}
    />
  );
}

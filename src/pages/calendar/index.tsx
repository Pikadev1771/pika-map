import { useEffect } from 'react';

import dynamic from 'next/dynamic';

const Calendar = dynamic(
  () => {
    return import('./Calendar');
  },
  { ssr: false }
);

export default function CalendarPage() {
  useEffect(() => {
    console.log('hi');
  }, []);

  return <Calendar />;
}

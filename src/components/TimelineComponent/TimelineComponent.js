import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const TimelineComponent = () => {
  const biographyTimeline = [
    {
      year: '1965 - 1985',
      label: 'Учился в детской народной изостудии при Дворце культуры текстильщиков в Минске.',
    },
    {
      year: '1979 - 1983',
      label: 'Учился и окончил Минское художественное училище (ныне - Минский государственный художественный колледж имени А. К. Глебова) , где царила свобода и плюрализм, а само училище стала заметным кузницей творческих личностей.',
    },
    {
      year: '1982',
      label: 'Участвовал в молодежном общественном объединении «Белорусский Мастеровой»',
    },
    {
      year: '1983 - 1985',
      label: 'Прошел срочную службу в Вооруженных силах СССР',
    },
  ];

  const timelineItems = biographyTimeline.map(({ year, label }) => (
    <TimelineItem
      key="001"
      dateText={year}
      className="timeline-years"
    >
      <h4 className="timeline-label">{label}</h4>
    </TimelineItem>
  ));

  return (
    <Timeline className="timeline" lineColor="#ddd">
      {timelineItems}
    </Timeline>
  );
};

export default TimelineComponent;

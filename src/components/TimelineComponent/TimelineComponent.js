/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import './TimelineComponent.scss';

const TimelineComponent = ({ biographyTimeline }) => {
  const biographyTimelineTest = [
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

  const timelineItems = biographyTimelineTest.map(({ year, label }, idx) => (
    <TimelineItem
      key={idx + 1}
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

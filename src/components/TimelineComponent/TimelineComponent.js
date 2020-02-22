/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import './TimelineComponent.scss';

const TimelineComponent = ({biographyTimeline = []}) => {
  const timelineItems = biographyTimeline.map(({ year, label }, idx) => (
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

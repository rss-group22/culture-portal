/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import './TimelineComponent.scss';

export default function TimelineComponent({biographyTimeline}) {
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

TimelineComponent.defaultProps = {
  biographyTimeline: []
}

TimelineComponent.propTypes = {
  biographyTimeline: PropTypes.arrayOf(PropTypes.object)
}

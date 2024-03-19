import React from 'react';
import virtualrace from '../../images/virtuarlrace.png';
import EventComponent from '../Section/EventComponent/EventComponent';

export default function VirtualRaceComponent() {
  return (
    <div >
      <img src={virtualrace} width="100%"  alt='virtual race' />
      <EventComponent />
    </div>
  )
}

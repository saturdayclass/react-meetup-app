import React from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetup.map((data) => {
        return (
          <MeetupItem
            key={data.id}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        );
      })}
    </ul>
  );
};

export default MeetupList;

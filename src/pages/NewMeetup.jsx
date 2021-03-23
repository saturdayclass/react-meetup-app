import React from 'react';
import NewMeetupForm from '../components/meetup/NewMeetupForm';

const NewMeetup = () => {
  const onAddMeetup = (data) => {
    console.log(data);
  };

  return (
    <>
      <h2>Add New Meetup</h2>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  );
};

export default NewMeetup;

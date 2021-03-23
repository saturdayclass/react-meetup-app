import React from 'react';
import NewMeetupForm from '../components/meetup/NewMeetupForm';

const NewMeetup = () => {
  const onAddMeetup = (data) => {
    const req = fetch(
      'https://react-getting-started-31f05-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(req);
  };

  return (
    <>
      <h2>Add New Meetup</h2>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  );
};

export default NewMeetup;

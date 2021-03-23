import React from 'react';
import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetup/NewMeetupForm';

const NewMeetup = () => {
  const history = useHistory();
  const onAddMeetup = async (data) => {
    await fetch(
      'https://react-getting-started-31f05-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    history.replace('/');
  };

  return (
    <>
      <h2>Add New Meetup</h2>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  );
};

export default NewMeetup;

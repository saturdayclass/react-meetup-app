import MeetupList from '../components/meetup/MeetupList';
import { useState, useEffect } from 'react';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupData, setMeetupData] = useState([]);
  const getData = async () => {
    const req = await fetch(
      'https://react-getting-started-31f05-default-rtdb.firebaseio.com/meetups.json'
    );
    const res = await req.json();
    setIsLoading(false);
    const meetups = [];

    for (const key in res) {
      const meetup = {
        id: key,
        ...res[key],
      };

      meetups.push(meetup);
    }
    setMeetupData(meetups);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <section>
          <p>Loading...</p>
        </section>
      ) : (
        <section>
          <h1>All MeetupsPage</h1>
          <MeetupList meetup={meetupData} />
        </section>
      )}
    </>
  );
}

export default AllMeetupsPage;

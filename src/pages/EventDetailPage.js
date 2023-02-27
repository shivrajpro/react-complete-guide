import { Link, useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Details of your event are as follows:</h1>
      <p>Event Name: {params.eventId} </p>
      <p>To update this event: <Link to='edit' >Click here</Link> </p>
    </>
  );
}

export default EventDetailPage;

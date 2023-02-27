import { useParams } from "react-router-dom";

function EditEventPage() {
  const params = useParams();
  
  return (
    <>
      <h1>Your event details are as follows:</h1>
      <p>Event ID : {params.eventId} </p>
      <button>Update</button>
    </>
  );
}

export default EditEventPage;

import { Fragment } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <h1>My Home Page</h1>
      <Link to="/abc" >ABC</Link>
    </Fragment>
  );
};

export default HomePage;

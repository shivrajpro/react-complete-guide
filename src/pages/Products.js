import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
const ProductsPage = () => {
  const navigate = useNavigate();

  const goToHome = ()=>{
    navigate('/');
  }
  return (
    <Fragment>
      <h1>My Products Page</h1>
      <button onClick={goToHome} >Home</button>
      {/* <Link to="../">Back</Link> */}
    </Fragment>
  );
};

export default ProductsPage;

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ViewProductPage() {
  const [product, setProduct] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  const getSingleProduct = async (productId) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const result = await axios(`http://localhost:4001/products/${productId}`);
      setProduct(result.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getSingleProduct(params.id);
  }, [params.id]);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        {product && (
          <>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </>
        )}
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  );
}

export default ViewProductPage;

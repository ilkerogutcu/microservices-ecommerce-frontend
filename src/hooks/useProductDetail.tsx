import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import catalogApi from "../api/CatalogApi";
import { IProductDetails } from "../types/productDetails";

function useProductDetail() {
 const { id } = useParams();
  const [productDetails, setProductDetails] = useState<IProductDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const { data } = await catalogApi.getProductDetails(id);
          setProductDetails(data);
          setLoading(false);
        }
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  return { productDetails, loading, error };
}

export default useProductDetail;

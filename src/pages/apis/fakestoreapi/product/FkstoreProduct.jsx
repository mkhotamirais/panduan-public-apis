import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../app/features/fakestoreapi/fakestoreapiSlice";
import { Err, Loading } from "../../../../components/Components";
import FkstoreProductSingle from "./FkstoreProductSingle";

const FkstoreProduct = () => {
  const dispatch = useDispatch();
  const { data: products, error, status } = useSelector((state) => state.fakestoreapi);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log(products, status, error);
  }, [products, status]);

  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    const renderedProducts = products && products.map((item) => <FkstoreProductSingle key={item?.id} item={item} />);
    content = <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-2">{renderedProducts}</div>;
  }
  return <div>{content}</div>;
};

export default FkstoreProduct;

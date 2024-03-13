import { FaStar } from "react-icons/fa";

const FkstoreProductSingle = ({ item }) => {
  return (
    <a
      className={
        "border rounded relative flex flex-col gap-2 text-gray-700 hover:scale-105 cursor-pointer transition-all duration-100"
      }
    >
      <div className="absolute text-[0.7rem] leading-none left-1 p-1 top-1 border rounded bg-black bg-opacity-50 text-white z-40">
        ID: {item?.id}
      </div>
      <div className="flex items-center gap-1 text-xs absolute right-1 top-1 bg-black bg-opacity-50 text-white rounded p-1 leading-none z-40">
        <FaStar className="text-yellow-500" />
        {item?.rating?.rate} | {item?.rating?.count} Sold
      </div>
      <figure className="w-full h-48 sm:h-56 rounded overflow-hidden">
        <img src={item?.image} className="object-contain object-center scale-90 w-full h-full" alt="fakestore image" />
      </figure>
      <div className="p-2 flex flex-col items-start gap-2">
        <div className="font-medium leading-5 flex-grow">{item?.title?.substring(0, 20)}..</div>
        <div className="text-xl font-medium">${item?.price}</div>
        <div className="text-sm leading-5">{item?.description?.substring(0, 50)}</div>
        <div className="text-xs border text-white leading-none p-1 bg-gray-500 rounded ">{item?.category}</div>
      </div>
    </a>
  );
};
FkstoreProductSingle.propTypes;

export default FkstoreProductSingle;

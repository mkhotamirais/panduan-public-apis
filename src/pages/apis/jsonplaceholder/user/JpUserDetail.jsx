import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Id } from "../../../../components/Components";
import { FaAddressCard, FaBuilding, FaEnvelope, FaGlobe, FaPhone, FaUser } from "react-icons/fa";

const JpUserDetail = () => {
  const { id } = useParams();
  const u = useSelector((state) => state.jp.users?.find((u) => u.id.toString() === id));

  if (u) {
    return (
      <div className="border rounded p-3 flex flex-col gap-4">
        <Id>ID: {u.id}</Id>
        <p className="flex items-center gap-2 font-medium">
          <FaUser className="inline-block text-sm" />
          {u.name} <i>@{u.username}</i>
        </p>
        <p className="flex items-center gap-2">
          <FaEnvelope className="inline-block text-sm" />
          {u.email}
        </p>
        <p className="flex items-center gap-2">
          <FaPhone className="inline-block text-sm" />
          {u.phone}
        </p>
        <p className="flex items-center gap-2">
          <FaGlobe className="inline-block text-sm" />
          {u.website}
        </p>
        <p className="flex items-center gap-2">
          <FaAddressCard className="inline-block text-sm" />
          {u?.address?.street}, {u?.address?.suite}, {u?.address?.city} - {u?.address?.zipcode}
        </p>
        <p className="flex items-center gap-2">
          <FaBuilding className="inline-block text-xl" />
          {u?.company?.name} - {u?.company?.bs} - {u?.company?.catchPhrase}
        </p>
      </div>
    );
  } else return <div className="italic">no data</div>;
};

export default JpUserDetail;

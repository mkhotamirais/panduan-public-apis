import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Btn } from "../../../components/Tags";

const OmdbapiHome = () => {
  return (
    <div className="flex justify-center mt-8">
      <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferer">
        <Btn className={"flex items-center gap-1 text-indigo-600 font-medium"}>
          omdbapi
          <sup>
            <FaExternalLinkSquareAlt className="text-xs" />
          </sup>
        </Btn>
      </a>
    </div>
  );
};

export default OmdbapiHome;

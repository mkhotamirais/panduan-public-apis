import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Btn } from "../../../components/Tags";

const NewsapiHome = () => {
  return (
    <div className="flex justify-center mt-8">
      <a href="https://newsapi.org/" target="_blank" rel="noopener noreferer">
        <Btn className={"flex items-center gap-1 text-indigo-600 font-medium"}>
          newsapi
          <sup>
            <FaExternalLinkSquareAlt className="text-xs" />
          </sup>
        </Btn>
      </a>
    </div>
  );
};

export default NewsapiHome;

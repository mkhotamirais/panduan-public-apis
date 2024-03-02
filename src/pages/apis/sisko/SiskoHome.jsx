import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Btn } from "../../../components/Tags";

const SiskoHome = () => {
  return (
    <div className="flex justify-center mt-8">
      <a
        href="https://documenter.getpostman.com/view/966202/2s9Xy2PsAa#apa-itu-sistemtoko"
        target="_blank"
        rel="noopener noreferer"
      >
        <Btn className={"flex items-center gap-1 text-indigo-600 font-medium"}>
          sisko
          <sup>
            <FaExternalLinkSquareAlt className="text-xs" />
          </sup>
        </Btn>
      </a>
    </div>
  );
};

export default SiskoHome;

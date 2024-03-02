import Logo from "../../layouts/Logo";
import { Btn } from "../../components/Tags";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Title } from "../../components/Components";

const PublicApi = () => {
  const publicApiList = [
    { href: "https://jsonplaceholder.typicode.com/", text: "jsonplaceholder" },
    { href: "https://fakestoreapi.com/", text: "fakestoreapi" },
    { href: "https://www.omdbapi.com/", text: "omdbapi" },
    { href: "https://newsapi.org/", text: "newsapi" },
    { href: "https://documenter.getpostman.com/view/966202/2s9Xy2PsAa#intro", text: "sisko" },
  ];

  const collectionApiList = [
    { href: "https://any-api.com/", text: "anyapi" },
    { href: "https://github.com/public-apis/public-apis", text: "public-api-1" },
  ];

  return (
    <div className="flex justify-center items-center flex-col gap-5 mt-5">
      <Logo className={"text-xl"} />
      <div className="flex gap-2 flex-wrap justify-center">
        {publicApiList.map((p, i) => (
          <a key={i} href={p.href} target="_blank" rel="noopener noreferer">
            <Btn key={i} className={"flex items-center gap-1 text-indigo-600 font-medium"}>
              {p.text}
              <sup>
                <FaExternalLinkSquareAlt className="text-xs" />
              </sup>
            </Btn>
          </a>
        ))}
      </div>
      <Title>Collection Api</Title>
      <div className="flex gap-2 flex-wrap justify-center">
        {collectionApiList.map((p, i) => (
          <a key={i} href={p.href} target="_blank" rel="noopener noreferer">
            <Btn key={i} className={"flex items-center gap-1 text-indigo-600 font-medium"}>
              {p.text}
              <sup>
                <FaExternalLinkSquareAlt className="text-xs" />
              </sup>
            </Btn>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PublicApi;

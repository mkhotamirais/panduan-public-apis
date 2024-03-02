import { PiSpinner } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaEdit, FaExclamationCircle, FaEye, FaHome, FaTimes, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Prev = ({ className }) => (
  <Link
    to={-1}
    className={`${className} rounded-full p-2 flex items-center bg-gray-50 hover:bg-indigo-600 hover:text-white justify-center`}
  >
    <FaChevronLeft />
  </Link>
);
Prev.propTypes;

export const Next = ({ className }) => (
  <Link
    to={1}
    className={`${className} rounded-full p-2 flex items-center bg-gray-50 hover:bg-indigo-600 hover:text-white justify-center`}
  >
    <FaChevronRight />
  </Link>
);
Next.propTypes;

export const Loading = ({ className }) => (
  <div className={`${className} flex justify-center mt-8`}>
    <PiSpinner className="animate-spin text-3xl" />
  </div>
);
Loading.propTypes;

export const Err = ({ children = "Err", className }) => (
  <div className={`${className} flex justify-center text-red-500 mt-4 italic`}>{children}</div>
);
Err.propTypes;

export const CardGrid = ({ children = "CardGrid", className }) => (
  <div className={`${className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3`}>
    {children}
  </div>
);
CardGrid.propTypes;

export const Id = ({ children = "Id", className }) => <div className={`${className} text-sm text-gray-500`}>{children}</div>;
Id.propTypes;

export const Title = ({ children = "Title", className }) => (
  <div className={`${className} font-medium capitalize text-lg`}>{children}</div>
);
Title.propTypes;

export const Card = ({ children = "Card", className }) => (
  <div className={`${className} border rounded p-2 flex flex-col gap-2`}>{children}</div>
);
Card.propTypes;

export const Actions = ({ detail = "detail", update = "update", onModalView, onModalDelete, className }) => {
  const [tooltip, setTooltip] = useState(null);

  const actionList = [
    {
      children: <FaEye />,
      to: "#",
      className: "text-blue-600 hover:text-white hover:bg-blue-600",
      tooltipMsg: "show modal",
      onClick: onModalView,
    },
    {
      children: <FaExclamationCircle />,
      to: detail,
      className: "text-yellow-600 hover:text-white hover:bg-yellow-600",
      tooltipMsg: "view detail",
    },
    {
      children: <FaEdit />,
      to: update,
      className: "text-green-600 hover:text-white hover:bg-green-600 relative",
      tooltipMsg: "update data",
    },
    {
      children: <FaTrash />,
      to: "#",
      className: "text-red-600 hover:text-white hover:bg-red-600",
      tooltipMsg: "delete data",
      onClick: onModalDelete,
    },
  ];

  return (
    <div className={`${className} border-t border-b border-indigo-300 rounded-lg flex justify-around p-1`}>
      {actionList.map((al, i) => (
        <LinkAction
          to={al.to}
          key={i}
          className={al.className}
          onEnter={() => setTooltip(i)}
          onLeave={() => setTooltip(null)}
          onClick={al.onClick}
        >
          {tooltip === i && <ToolTip>{al.tooltipMsg}</ToolTip>}
          {al.children}
        </LinkAction>
      ))}
    </div>
  );
};
Actions.propTypes;

export const LinkAction = ({ children = "LinkAction", to, onEnter, onLeave, onClick, className }) => (
  <Link
    to={to}
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    onClick={onClick}
    className={`${className} bg-gray-50 rounded-full p-2 transition-all duration-150 relative`}
  >
    {children}
  </Link>
);
LinkAction.propTypes;

export const ToolTip = ({ children = "ToolTip", className }) => (
  <div className={`${className} bg-gray-600 leading-none text-white p-2 rounded-xl absolute -top-8 text-xs w-max`}>
    {children}
  </div>
);
ToolTip.propTypes;

export const Modal = ({ children = "Modal", onClick, className }) => (
  <div
    onClick={onClick}
    className={`${className} z-50 fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center`}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white rounded-lg mx-3 w-full sm:w-1/2 lg:w-1/3 p-4 relative flex flex-col gap-2"
    >
      <FaTimes onClick={onClick} className="hover:text-red-500 text-lg absolute top-3 right-3 cursor-pointer" />
      {children}
    </div>
  </div>
);
Modal.propTypes;

export const Breadcrumb = ({ className }) => {
  const location = useLocation();
  const path = location.pathname.split("/");
  path[0] = <FaHome className="inline-block" />;

  useEffect(() => {
    // console.log(path);
    // console.log(path.splice(1, 2).join("/"));
  }, [path, location]);

  let content;
  content = path.map((p, i) => {
    let to;
    if (i === 0) to = "..";
    else if (p === "detail" || p === "update") to = "#";
    else
      to = location.pathname
        .split("/")
        .splice(2, path.indexOf(p) - 1)
        .join("/");
    return (
      <Link to={to} key={p} className="hover:underline hover:opacity-70">
        {p}
        {i !== path.length - 1 ? <FaChevronRight className="inline-block text-xs mx-2 text-gray-400" /> : null}
      </Link>
    );
  });

  return <div className={`${className} mx-1 bg-indigo-50 rounded p-2 border-t border-b border-indigo-300`}>{content}</div>;
};

Breadcrumb.propTypes;

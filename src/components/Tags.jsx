export const H1 = ({ children = "H1", className }) => (
  <h1 className={`${className} font-semibold text-center py-2 text-xl`}>{children}</h1>
);
H1.propTypes;

export const Btn = ({ children = "Btn", type, disabled, onClick, className }) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`rounded bg-gray-300 p-2 leading-none disabled:opacity-50 disabled:pointer-events-none hover:bg-indigo-600 hover:text-white ${className}`}
  >
    {children}
  </button>
);
Btn.propTypes;

export const Label = ({ children = "Label", id, className }) => (
  <label htmlFor={id} className={`${className} font-medium capitalize leading-relaxed block`}>
    {children}
  </label>
);
Label.propTypes;

export const Input = ({ type = "text", id, value, onChange, className }) => (
  <input
    type={type}
    id={id}
    name={id}
    value={value}
    onChange={onChange}
    className={`${className} border rounded p-2 block w-full`}
  />
);
Input.propTypes;

export const Textarea = ({ id, value, onChange, className }) => (
  <textarea id={id} name={id} value={value} onChange={onChange} className={`${className} border rounded w-full h-32`} />
);
Textarea.propTypes;

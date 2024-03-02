const Logo = ({ className }) => {
  return (
    <a href="/" className={className}>
      <span className="font-semibold rounded-lg leading-none p-1 bg-gradient-to-tr from-red-600 via-green-400 to-blue-600 text-white">
        Public
      </span>
      <span className="font-semibold bg-gradient-to-tr from-red-600 via-green-400 to-blue-600 bg-clip-text text-transparent">
        Apis
      </span>
    </a>
  );
};
Logo.propTypes;

export default Logo;

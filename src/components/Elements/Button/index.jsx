const Button = ({ children, customeClass = 'bg-black' }) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md text-white ${customeClass}`}
    >
      {children}
    </button>
  );
};

export default Button;

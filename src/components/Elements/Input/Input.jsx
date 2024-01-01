import React from 'react';

const Input = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      className="text-sm rounded w-full py-2 px-3 text-slate-7 placeholder:opacity-50"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

export default Input;

import * as React from "react";

export const RadioGroup = ({ children, value, onValueChange, className }) => {
  return (
    <div role="radiogroup" className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { value, onValueChange })
      )}
    </div>
  );
};

export const RadioGroupItem = ({ value, children, onValueChange }) => {
  const handleClick = () => onValueChange(value);
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="radio"
        value={value}
        checked={value === undefined ? false : value === value}
        onChange={handleClick}
        className="accent-red-600"
      />
      <span>{children}</span>
    </label>
  );
};

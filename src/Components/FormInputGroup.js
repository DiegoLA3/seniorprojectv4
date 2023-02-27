import React from "react";

function FormInputGroup({
  text,
  icon,
  placeholder,
  value,
  onInput,
  onkeyup,
  readOnly = false,
}) {
  return (
    <div >
      <span >
        {text} {icon}
      </span>
      <input
        type="number"
        value={value}
        className="form-control"
        placeholder={placeholder}
        onInput={onInput}
        onKeyUp={onkeyup}
        readOnly={readOnly}
      />
    </div>
  );
}

export default FormInputGroup;
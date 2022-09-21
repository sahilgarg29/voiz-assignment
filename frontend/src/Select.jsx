import { useRef, useState } from "react";
import "./select.css";

const Select = ({ options }) => {
  const [selected, setSelected] = useState([]);
  const [availableOptions, setAvailableOptions] = useState(options);
  const dropdownRef = useRef(null);

  function handleClick(opt) {
    console.log(selected);
    setSelected((prev) => [...prev, opt]);
    setAvailableOptions((prev) => {
      return prev.filter((e) => e.value !== opt.value);
    });
  }

  function handleRemove(opt) {
    setSelected((prev) => {
      return prev.filter((e) => e.value !== opt.value);
    });
  }

  return (
    <div className="selectContainer">
      <div
        className="select-box"
        onFocus={() => dropdownRef.current.classList.add("focus")}
        // onBlur={() => dropdownRef.current.classList.remove("focus")}
      >
        {selected.map((e) => (
          <div className="selected">
            <p>{e.label}</p>
            <span onClick={() => handleRemove(e)}>x</span>
          </div>
        ))}
        <input type="text" name="search" id="search" />
      </div>
      <div className="dropdown" ref={dropdownRef}>
        {availableOptions.map((opt) => (
          <div onClick={() => handleClick(opt)}>{opt.label}</div>
        ))}
      </div>
    </div>
  );
};

export default Select;

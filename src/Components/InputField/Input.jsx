import person from "../../assets/icon-person.svg";
import dollar from "../../assets/icon-dollar.svg";
import Label from "../Label";
import { useState } from "react";

function Input(props) {
  const [isZero, setIsZero] = useState(false);
  const [isLessThanZero, setIsLessThanZero] = useState(false);

  let img = props.label == "Bill" ? dollar : person;

  function getValueHandler(event) {
    if (parseInt(event.target.value) != 0 || event.target.value === "") {
      setIsZero(false);
    } else setIsZero(true);

    if (parseInt(event.target.value) < 0) {
      setIsLessThanZero(true);
    } else {
      setIsLessThanZero(false);
    }

    props.onGetValue(event.target.value);
  }
  return (
    <div className="mb-8">
      <Label
        label={props.label}
        errorDisplayForZero={isZero}
        errorDisplayForLessThanZero={isLessThanZero}
      ></Label>
      <div className="flex flex-row items-center relative ">
        <img src={img} alt="" className="absolute left-3" />
        <input
          type="number"
          className={`text-right w-full text-xl text-very-dark-cyan bg-very-light-grayish-cyan outline-none p-2  rounded-md ${
            isZero || isLessThanZero ? "border-2 border-red-400" : "border-0"
          }`}
          onChange={getValueHandler}
          placeholder="0"
          value={props.value}
        />
      </div>
    </div>
  );
}

export default Input;

import AmountDisplay from "./AmountDisplay";
function FinalDisplay(props) {
  const tipsAmount = (props.displayValue[0] * props.displayValue[2]) / 100;

  function clickHandler() {
    props.resetBillValue("");
    props.resetPeopleValue("");
    props.resetTipValue("");
  }

  return (
    <div className="bg-very-dark-cyan p-5 rounded-xl md:w-1/2 flex flex-col justify-between">
      <div>
        <AmountDisplay title="Tip Amount">
          {!(props.displayValue[0] && props.displayValue[2]) ? 0 : tipsAmount}
        </AmountDisplay>
        <AmountDisplay title="Total">
          {!(
            props.displayValue[0] &&
            props.displayValue[1] &&
            props.displayValue[2]
          )
            ? 0.0
            : Math.ceil(
                (parseInt(props.displayValue[0]) + tipsAmount) /
                  props.displayValue[1]
              )}
        </AmountDisplay>
      </div>

      <button
        className="w-full bg-strong-cyan p-3 rounded-md text-very-dark-cyan text-xl mb-2"
        onClick={clickHandler}
      >
        RESET
      </button>
    </div>
  );
}

export default FinalDisplay;

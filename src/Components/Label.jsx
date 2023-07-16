function Label(props) {
  return (
    <div className="flex flex-row items-center mb-1 justify-between">
      <h2 className="text-sm text-dark-grayish-cyan ">{props.label}</h2>
      <p
        className={`text-xs text-red-600 ${
          props.errorDisplayForZero || props.errorDisplayForLessThanZero
            ? "opacity-1"
            : "opacity-0"
        }`}
      >
        {props.errorDisplayForZero
          ? "Number can't be zero"
          : "Number less than zero"}
      </p>
    </div>
  );
}

export default Label;

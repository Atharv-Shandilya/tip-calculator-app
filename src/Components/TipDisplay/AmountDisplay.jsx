function AmountDisplay(props) {
  return (
    <div className="flex flex-row items-center justify-between my-4 font-normal">
      <div>
        <h2 className="text-sm leading-4.5 text-white">
          {props.title} <br />
          <span className="text-xs text-grayish-cyan">/ person</span>
        </h2>
      </div>
      <div className="text-3xl text-strong-cyan">${props.children}</div>
    </div>
  );
}

export default AmountDisplay;

import { useDebugValue, useState } from "react";
import FinalDisplay from "./Components/TipDisplay/FinalDisplay";
import Input from "./Components/InputField/Input";
import TipSelect from "./Components/TipSelect/TipSelect";
function App() {
  const [peopleValue, setPeopleValue] = useState("");
  const [billValue, setBillValue] = useState("");
  const [tipValue, setTipValue] = useState();
  function peopleHandler(value) {
    setPeopleValue(value);
  }

  function billHandler(value) {
    setBillValue(value);
  }

  return (
    <div className="flex flex-col border md:bg-cyan-200 h-screen justify-center md:items-center ">
      {/* <h1 className="text-center text-2xl tracking-widest text-very-dark-cyan font-semibold">
        S P L I
        <br />T T E R
      </h1> */}
      <div className="font-SpaceMono m-4 md:m-6 max-w-4xl  flex flex-col md:flex-row bg-white md:p-8 rounded-lg">
        <div className="md:w-1/2 mr-8">
          <Input
            label={"Bill"}
            onGetValue={billHandler}
            value={billValue}
          ></Input>
          <TipSelect setTipValue={setTipValue} tipValue={tipValue}></TipSelect>
          <Input
            label={"Number of people"}
            onGetValue={peopleHandler}
            value={peopleValue}
          ></Input>
        </div>
        <FinalDisplay
          displayValue={[billValue, peopleValue, tipValue]}
          resetBillValue={setBillValue}
          resetPeopleValue={setPeopleValue}
          resetTipValue={setTipValue}
        ></FinalDisplay>
      </div>
    </div>
  );
}

export default App;

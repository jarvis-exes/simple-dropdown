import { useState } from "react";
import Dropdown from "./Dropdown";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [selected, setSelected] = useState("Selected");
  const dropdownOptions = ["Yes", "Probably No", "I don't know"];

  const handleMouseEnter = () => {
    setIsShow(true);
  };

  const handleOnClick = (item) => {
    setSelected(item);
    setIsShow(false);
  };

  return (
    <Dropdown
      items={dropdownOptions}
      handleOnClick={handleOnClick}
      handleMouseEnter={handleMouseEnter}
      isShow={isShow}
    />
  );
}

export default App;

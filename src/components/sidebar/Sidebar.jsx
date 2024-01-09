import { useState } from "react";
import Links from "./Links";
import ToggleButtons from "./ToggleButtons";
import "./sidebar.scss";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open : "",
    closed : ""
  }
  return (
    <div className="sidebar">
      <div className="bg">
        <Links></Links>
        <h1>hello</h1>
      </div>
      <ToggleButtons setOpen={setOpen}></ToggleButtons>
    </div>
  );
};

export default Sidebar;

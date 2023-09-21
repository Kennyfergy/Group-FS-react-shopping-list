import axios from "axios";
import { useState } from "react";

export default function Buttons(props) {
  const [editBox, setEditBox] = useState("");

  function resetList() {
    axios({
      method: "PUT",
      url: "/items",
    })
      .then((response) => {
        console.log("reset was successful", response);
        props.getItems();
        setEditBox("");
      })
      .catch((error) => {
        console.log("there was an error resetting", error);
      });
  }

  function deleteList() {
    axios({
      method: "DELETE",
      url: "/items",
    })
      .then((response) => {
        console.log("deleted items", response);
        props.getItems();
        setEdit("");
      })
      .catch((error) => {
        console.log("error deleting items", error);
      });
  }

  function hideEditBox() {
    console.log("closed editBox");
    setEditBox("");
  }

  function setDelete() {
    setEditBox(
      <div className="editBox">
        <h1>Do you want to delete list?</h1>
        <button onClick={deleteList}>YES</button>
        <button onClick={hideEditBox}>oops I don't want to delete</button>
      </div>
    );
  }

  function setReset() {
    setEditBox(
      <div className="editBox">
        <h1>Do you want to reset list?</h1>
        <button onClick={resetList}>YES</button>
        <button onclick={hideEditBox}>NO</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={setReset}>Reset</button>
      <button onClick={setDelete}>Clear</button>
      <div className="setContainer">{editBox}</div>
    </div>
  );
}

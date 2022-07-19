import React, { useState } from "react";

import { X } from "react-feather";

import "./Editable.css";

function Editable(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [inputText, setInputText] = useState(props.defaultValue || "");

  const submission = (e) => {
    e.preventDefault();
    if (inputText && props.onSubmit) {
      if (props.type == "text")
        props.onSubmit(inputText);
      else
        props.onSubmit(props.id, inputText)

      setInputText("");
    }
    setIsEditable(false);
  };

  return (
    <div className="editable">
      {isEditable ? (
        <form
          className={`editable_edit ${props.editClass ? props.editClass : ""}`}
          onSubmit={submission}
        >
          <input
            type={props.type}
            placeholder={props.placeholder || props.text}
            onChange={(event) => {
              if (event.target.type == "file") {
                let selected = event.target.files[0]
                let reader = new FileReader();
                reader.onloadend = () => {
                  setInputText(reader.result)
                }
                reader.readAsDataURL(selected)
              } else if (event.target.type == "text") {
                setInputText(event.target.value)
              }
            }}
            autoFocus
          />
          <div className="editable_edit_footer">
            <button type="file">{props.buttonText || "Tambah Buku"}</button>
            <X onClick={() => setIsEditable(false)} className="closeIcon" />
          </div>
        </form>
      ) : (
        <p
          className={`editable_display ${props.displayClass ? props.displayClass : ""
            }`}
          onClick={() => setIsEditable(true)}
        >
          {props.text}
        </p>
      )}
    </div>
  );
}

export default Editable;
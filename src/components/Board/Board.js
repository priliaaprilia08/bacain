import React, { useState, useEffect } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Editable from "../Editabled/Editable";
import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(new Array(props.idx).fill(false));
  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          {props.board?.title}
          <span style={{ display: "block" }}>{props.board?.cards?.length || 0}</span>
        </p>
        <div
          className="board_header_title_more"
          onClick={() => {
            let Arr = [...showDropdown]
            Arr[props.index] = !showDropdown[props.index];
            Arr.map((val, idx) => {
              if (idx != props.index) return false
            })
            setShowDropdown(Arr);
          }}
        >
          <MoreHorizontal />
          {(showDropdown[props.index] == true) ? (
            <Dropdown
              class="board_dropdown"
            >
              <p onClick={() => props.removeBoard()}>Hapus Rak</p>
            </Dropdown>
          ) : null}
        </div>
      </div>
      <div className="board_cards custom-scroll">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            title={item.title}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}

          />
        ))}
        <Editable
          text="+ Tambah Buku"
          type="file"
          placeholder="Enter Card File"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          id={props.board.id}
          onSubmit={props.addCard([0])}
        />
      </div>
    </div>
  );
}

export default Board;
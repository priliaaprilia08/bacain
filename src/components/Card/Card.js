import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";

import Dropdown from "../Dropdown/Dropdown";

import "./Card.css";
// import CardInfo from "./CardInfo/CardInfo";

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // const { id, title, date, tasks, labels } = props.card;
  // const [imgPreview,setImgPreview] = useState(null);

  // const formatDate = (value) => {
  //   if (!value) return "";
  //   const date = new Date(value);
  //   if (!date) return "";

    // const months = [
    //   "Jan",
    //   "Feb",
    //   "Mar",
    //   "Aprl",
    //   "May",
    //   "Jun",
    //   "Jul",
    //   "Aug",
    //   "Sep",
    //   "Oct",
    //   "Nov",
    //   "Dec",
    // ];

  //   const day = date.getDate();
  //   const month = months[date.getMonth()];
  //   return day + " " + month;
  // };

  return (
    <>
      {/* {showModal &&} */}
      <div
        className="card"
        draggable
        onDragEnd={() => props.dragEnded(props.boardId)}
        onDragEnter={() => props.dragEntered(props.boardId)}
        onClick={() => setShowModal(true)}
      >
        <img src={props.title} />
        <div className="card_top">
          <div
            className="card_top_more"
            onClick={(event) => {
              event.stopPropagation();
              setShowDropdown(true);
            }}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown
                class="board_dropdown"
                // onClose={() => setShowDropdown(false)}
              >
                <p onClick={() => props.removeCard(props.boardId)}>Delete Card</p>
              </Dropdown>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
import React from "react";
import "./List.css";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
function List(props) {
  return (
    <div>
      <ul>
        <div
          style={{ textDecoration: props.value.status ? "line-through" : "" }}
        >
          <li>
            {props.value.data}
            <Checkbox
              checked={props.value.status}
              value={props.value.status}
              style={{ color: "green" }}
              onClick={() => {
                props.func2(props.value.id);
              }}
            />
            <button
              className="delete"
              onClick={() => {
                props.func(props.value.id);
              }}
            >
              <DeleteIcon />
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default List;

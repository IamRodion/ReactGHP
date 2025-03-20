import React from "react";

const ListGroup = ({ workers }) => {
  return (
    <ul className="list-group mb-3">
      {workers.map((worker, index) => (
        <li
          key={index}
          className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center"
        >
          {worker.name}
          <span className={`badge bg-${worker.color} rounded-pill`}>
            {worker.count}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;

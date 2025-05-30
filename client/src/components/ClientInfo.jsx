import React from "react";
import { FaIdBadge } from "react-icons/fa";

export default function ClientInfo({ client }) {
  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon" /> {client.name}
        </li>
      </ul>
    </>
  );
}

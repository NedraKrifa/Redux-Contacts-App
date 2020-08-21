import React from "react";
import HeadTable from "./HeadTable";
import BodyTable from "./BodyTable";
import { useSelector } from "react-redux";

function Table({ setId }) {
  const contacts = useSelector((state) => state.contacts);
  return (
    <table>
      <thead>
        <HeadTable />
      </thead>
      {contacts.length ? (
        <tbody>
          <BodyTable setId={setId} />
        </tbody>
      ) : (
        <p>
          <i className="fas fa-undo"></i>...loading
        </p>
      )}
    </table>
  );
}
export default Table;

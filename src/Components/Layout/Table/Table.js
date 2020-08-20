import React from "react";
import HeadTable from "./HeadTable";
import BodyTable from "./BodyTable";

function Table({ contacts, setId, deleteContact }) {
  return (
    <table>
      <thead>
        <HeadTable />
      </thead>
      {contacts.length ? (
        <tbody>
          <BodyTable
            contacts={contacts}
            setId={setId}
            deleteContact={deleteContact}
          />
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

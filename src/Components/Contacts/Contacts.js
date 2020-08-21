import React, { useState, useEffect } from "react";
import Table from "../Layout/Table/Table";
import { useDispatch } from "react-redux";
import { getAllContacts } from "../../actions/contactActions";

function Contacts({ setId }) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllContacts()), []);

  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className="contacts">
      <div onClick={() => setShowContacts(!showContacts)}>
        {showContacts ? (
          <i className="fas fa-angle-double-up"></i>
        ) : (
          <i className="fas fa-angle-double-down"></i>
        )}
      </div>
      {showContacts ? (
        <Table setId={setId} />
      ) : (
        ""
      )}
    </div>
  );
}
export default Contacts;

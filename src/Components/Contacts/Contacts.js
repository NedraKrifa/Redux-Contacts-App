import React, { useState } from "react";
import Table from "../Layout/Table/Table";
function Contacts({ contacts, setId, deleteContact }) {
  const [showContacts, setShowContacts] = useState(false);
  return (
    <div className="contacts">
      <div onClick={()=>setShowContacts(!showContacts)}>
        {showContacts ? (
          <i class="fas fa-angle-double-up"></i>
        ) : (
          <i class="fas fa-angle-double-down"></i>
        )}
      </div>
      {showContacts ? (
        <Table
          contacts={contacts}
          setId={setId}
          deleteContact={deleteContact}
        />
      ) : (
        ""
      )}
    </div>
  );
}
export default Contacts;

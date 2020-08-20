import React from "react";

function HeadTable() {
  const headings = [
    "Id",
    "Username",
    "Name",
    "Email",
    "Phone",
    "Edit",
    "Delete",
  ];
  return (
    <tr>
      {headings.map((head) => (
        <td key={head}>{head}</td>
      ))}
    </tr>
  );
}
export default HeadTable;

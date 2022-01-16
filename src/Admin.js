import React from "react";
import "./Admin.css";

function Admin() {
  return (
    <div className="admin">
      <form action={handleSubmit} className="admin__login">
        <label htmlFor="admin-username">Admin Username:</label>
        <input
          type="text"
          placeholder="Enter admin username..."
          name="admin-username"
          required
        />
        <label htmlFor="admin-password">Admin Password:</label>
        <input
          type="password"
          placeholder="Enter admin password..."
          name="admin-password"
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Admin;

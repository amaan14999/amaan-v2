import React from "react";

const EmailTemplate = ({ name, email, message }) => {
  return (
    <div>
      <h1>Message from {name}</h1>
      <h3>
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <p>{message}</p>
    </div>
  );
};

export default EmailTemplate;

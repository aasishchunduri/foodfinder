import { useState } from "react";
const User = () => {
  const [count] = useState(0);

  return (
    <div className="user-card">
      <h3> Name: Aasish</h3>
      <h4>Location: Charlotte, USA</h4>
      <h4>Contact: 9803820098</h4>
    </div>
  );
};

export default User;

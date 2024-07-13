import React, { useEffect, useState } from "react";
import axios from "axios";

const Message: React.FC = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/spotify/data`
        );
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching data:", error); // Log the error for debugging
        setMessage("Error fetching data"); // Set a user-friendly error message
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  return (
    <div>
      <p>{message}</p> {/* Display the message */}
    </div>
  );
};

export default Message;

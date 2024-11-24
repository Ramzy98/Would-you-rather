import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";

// Function to generate a UUID (v4) in the browser
function generateUniqueVoterId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Function to send the vote request as FormData
function sendVoteRequest() {
  const formData = new FormData();

  // Append the fields to FormData (hash is added as an empty key)
  formData.append("eventCode", "MECLUB24");
  formData.append("voterId", generateUniqueVoterId()); // Unique UUID for each request
  formData.append("hash", ""); // Empty key with no value
  formData.append("vote", "0");

  fetch("https://gs-voting.oddb.co/votes", {
    method: "POST",
    body: formData,
  })
  .then((response) => {
    if (response.ok) {
      console.log("Vote sent successfully");
    } else {
      response.text().then((errorMessage) => {
        // Log the detailed error response
        console.error("Failed to send vote. Status:", response.status);
        console.error("Error message:", errorMessage);
      });
    }
  })
  .catch((error) => {
    // Catch network-related errors and log them
    console.error("Error sending vote:", error);
  });
}

// Infinite loop to send requests every 1 second
setInterval(() => {
  sendVoteRequest();
}, 10000);


const store = createStore(reducer, middleware);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [complain, setComplain] = useState("");
  const [eachdata, setEachData] = useState([]);

  var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

  const getData = () => {
    let completeData = {
      username: username,
      password: password,
      complain: complain,
    };
    setEachData([...eachdata, completeData]);
    if (!username) {
      toast("Plz Enter the UserName", {
        position: "top-center",
      });
    } else if (username.length < 6) {
      var text = document.getElementById("text");
      text.innerHTML = "Username must be 6 characters*";
      setTimeout(() => {
        text.innerHTML = "";
      }, 1500);
    } else if (password.match(paswd)) {
      document.getElementById("passrd").innerHTML = "";
    } else if (!password) {
      toast.error("Plz Enter the Password", {
        position: "top-center",
      });
    } else if (!complain) {
      toast.error("Plz Enter the Complain", {
        position: "top-center",
      });
    } else if (username && password && complain) {
      toast.success("Your Form Successfully Submit", {
        position: "top-center",
      });
      setUserName("");
      setPassword("");
      setComplain("");
    }
  };

  return (
    <>
      <div className="main_cont">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            id="username"
            autoComplete="off"
          />
          <b id="text"></b>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            autoComplete="off"
          />
          <b id="passrd"></b>
          <label htmlFor="complain">Complain</label>
          <textarea
            rows="15"
            cols="15"
            value={complain}
            onChange={(e) => {
              setComplain(e.target.value);
            }}
          />
          <button id="btn" type="button" onClick={getData}>
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;

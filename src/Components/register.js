import react, { useState } from "react";
import { Link } from "react-router-dom";
function RegisterForm() {
  function test(e) {
    e.preventDefault();
    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullname,
      }),
    }).then(function (res) {
      console.log(res);
    });
  }
  function fChange(e) {
    const { name, value } = e.target;
    changeName((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(fullname);
  }
  const [fullname, changeName] = useState({ first: "", last: "", email: "" });
  return (
    <form>
      <input
        placeholder="First Name"
        name="first"
        type="text"
        value={fullname.first}
        onChange={fChange}
      />
      <input
        onChange={fChange}
        placeholder="Last Name"
        name="last"
        type="text"
        value={fullname.last}
      />
      <input
        onChange={fChange}
        value={fullname.email}
        type="email"
        placeholder="Email"
        name="email"
      />

      <button onClick={test} type="submit">
        Submit
      </button>
    </form>
  );
}
export default RegisterForm;

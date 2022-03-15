import React from "react";
import "./styles.css";

export default function App() {
  // const [fname, setfname] = React.useState('')
  // const [password ,setpassword] = React.useState('')

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    address: "",
    comments: ""
  });
  function changehandler(event) {
    setFormData((pre) => {
      return {
        ...pre,
        [event.target.name]: event.target.value
      };
    });
  }
  // function changehandler(e) {
  //   setfname(e.target.value);
  // }
  // function changehandler1(e){
  //   setpassword(e.target.value)
  // }
  const onsubmit = (e) => {
    e.preventDefault();
  };

  function detail() {
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={onsubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={changehandler}
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={changehandler}
          name="password"
        />
        <input
          type="text"
          placeholder="Address"
          onChange={changehandler}
          name="address"
        />
        <textarea
          placeholder="comments"
          name="comments"
          onChange={changehandler}
        />
        <input type="submit" onClick={detail} />
      </form>
    </div>
  );
}

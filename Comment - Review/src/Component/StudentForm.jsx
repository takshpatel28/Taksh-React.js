import { useState } from "react";

const initialize = {
  name: "",
  email: "",
  pass: "",
  gender: "",
  post: "",
};

export function StudentForm() {
  const [formData, setFormData] = useState(initialize);

  const { name, email, pass, post, gender } = formData;

  function handleclick(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
     <br />
      <input type="text" value={name} onChange={handleclick} placeholder="enter your name" name="name" />
      <br />
      <br />
      <input
        type="email" name="email" value={email} onChange={handleclick} placeholder="enter your email" />
      <br />
      <br />
      <input type="password" name="pass" value={pass} onChange={handleclick} placeholder="enter your Password" />
      <br />
      <br />
      
      <select value={post} onChange={handleclick} name="post" id="">
        <option value="Freshman">Freshman</option>
        <option value="Junior">Junior</option>
        <option value="Senior">Senior</option>
      </select>
      <br />
      <br />
      Male{" "}
      <input type="radio" name="gender" value={"Male"} onChange={handleclick} />
      Female{" "}
      <input type="radio" value={"Female"} onChange={handleclick} name="gender" />
      <br />
      <br />
      <input type="submit" />
    </form>
  );
}

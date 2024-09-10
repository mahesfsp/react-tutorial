import { useState } from "react";

function Form() {
  const [inputs, setInputs] = useState({phone:"+91",email:"@gmail.com",country:"India",about:"I am"});

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Current state:", inputs.name, inputs.email, inputs.age,inputs.country,inputs.phone);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter your age:
          <input
            type="text"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter your email:
          <input
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Enter your phone:
          <input
            type="text"
            name="phone"
            value={inputs.phone || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Enter your country:
          <select
            
            name="country"
            value={inputs.country || ""}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="Dubai">Dubai</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Enter about you:
          <textarea
            type="text"
            name="about"
            value={inputs.about || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;

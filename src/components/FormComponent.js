import { useState } from "react";

function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    phone: "+91",
    email: "@gmail.com",
    country: "India",
    about: "I am",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
    console.log(
      "Current state:",
      inputs.name,
      inputs.email,
      inputs.age,
      inputs.country,
      inputs.phone
    );
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  return (
    <div style={styles.formContainer}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Enter your name:
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Enter your age:
          <input
            type="text"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Enter your email:
          <input
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Enter your phone:
          <input
            type="text"
            name="phone"
            value={inputs.phone || ""}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Enter your country:
          <select
            name="country"
            value={inputs.country || ""}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="">Select Country</option>
            <option value="Dubai">Dubai</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
          </select>
        </label>
        <br />
        <label style={styles.label}>
          Enter about you:
          <textarea
            name="about"
            value={inputs.about || ""}
            onChange={handleChange}
            style={styles.textarea}
          />
        </label>
        <br />
        <input type="submit" value="Submit" style={styles.submitButton} />
      </form>
    </div>
  );
}

const styles = {
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
    padding: "20px",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "5px 0 15px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  select: {
    width: "100%",
    padding: "8px",
    margin: "5px 0 15px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    margin: "5px 0 15px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
    minHeight: "80px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Form;

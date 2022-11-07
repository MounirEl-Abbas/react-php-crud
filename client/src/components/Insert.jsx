import { useState } from "react";
import axios from "axios";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const Insert = () => {
  const [inputs, setInputs] = useState(initialState);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post("http://localhost/react-php-crud/insert.php", inputs);
    } catch (error) {
      console.log(error);
    }
    setInputs(initialState);
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Add New User</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            onChange={handleChange}
            value={inputs.firstName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            onChange={handleChange}
            value={inputs.lastName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={handleChange}
            value={inputs.email}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Register User"
            className="btn btn-primary"
            style={{ marginTop: 10 }}
          />
        </div>
      </form>
    </div>
  );
};
export default Insert;

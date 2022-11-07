import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const Edit = () => {
  const [inputs, setInputs] = useState(initialState);
  const { id } = useParams();
  const redirect = useNavigate();

  const getStudentById = async id => {
    const res = await axios.get(
      `http://localhost/react-php-crud/getById.php?id=${id}`
    );
    setInputs(res.data);
  };

  useEffect(() => {
    try {
      getStudentById(id);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.patch(
        `http://localhost/react-php-crud/edit.php?id=${id}`,
        inputs
      );
      redirect("/view");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Edit Student</h3>
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
            value="Edit User"
            className="btn btn-primary"
            style={{ marginTop: 10 }}
          />
        </div>
      </form>
    </div>
  );
};
export default Edit;

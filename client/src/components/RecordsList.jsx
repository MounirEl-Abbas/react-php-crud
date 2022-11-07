import axios from "axios";
import { Link } from "react-router-dom";

const RecordsList = ({ id, firstName, lastName, email, getStudents }) => {
  const deleteStudent = async id => {
    try {
      await axios.delete(`http://localhost/react-php-crud/delete.php?id=${id}`);
      getStudents();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>
        <Link to={`/edit/${id}`} className="btn btn-primary">
          Edit
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteStudent(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
export default RecordsList;

import axios from "axios";
import { useState, useEffect, useRef } from "react";
import RecordsList from "./RecordsList";

const View = () => {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    const res = await axios.get("http://localhost/react-php-crud/list.php");
    setStudents(res.data);
  };

  //On initial render, get students
  useEffect(() => {
    try {
      getStudents();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <h3 align="center">Users List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <RecordsList {...student} key={i} getStudents={getStudents} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default View;

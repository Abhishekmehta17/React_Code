import { useState } from "react";
const EmployeeForm = (props) => {
  let [formdetails, setformdetails] = useState({
    empid: "",
    ename: "",
    sal: "",
  });
  let insertData = () => {
    if (
      formdetails.empid === "" ||
      formdetails.ename === "" ||
      formdetails.sal === ""
    ) {
      alert("please fill all the values!!!!");
      return
    }
    console.log("in empform add function");
    props.adddata(formdetails);
    setformdetails({ empid: "", ename: "", sal: "" });
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <lable htmlFor="empid">Employee Id</lable>
          <input
            type="text"
            className="from-control"
            id="empid"
            name="empid"
            value={formdetails.empid}
            onChange={(event) => {
              setformdetails({ ...formdetails, empid: event.target.value });
            }}
          />
        </div>
        <div className="from-group">
          <lable htmlFor="ename">Employee Name</lable>
          <input
            type="text"
            className="form-control"
            id="ename"
            name="ename"
            value={formdetails.ename}
            onChange={(event) => {
              setformdetails({ ...formdetails, ename: event.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <lable htmlFor="sal">Employee Salary</lable>
          <input
            type="text"
            className="form-control"
            id="sal"
            name="sal"
            value={formdetails.sal}
            onChange={(event) => {
              setformdetails({ ...formdetails, sal: event.target.value });
            }}
          />
        </div>
        <button type="button" className="btn-btn-primary" onClick={insertData}>
          Add new Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;

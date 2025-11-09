import React, { useState } from "react";
import empAPI from "../api/employeeAPI";
import { useParams } from "react-router-dom";
import MyInput from "../package/matinput";

const StateLogin = () => {
  const { id } = useParams();

  const [employeeData, setEmployeeData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleClick = (value: any, key2: any) => {
    setEmployeeData((data) => ({ ...data, [key2]: value }));
    console.log(employeeData, "current");
  };

  const handleSubmit =    async (formData: any) => {
    formData.preventDefault();
    try {
      const result: any =   await empAPI.getList(employeeData);
      if(result){
          console.log(result)
      }
    } catch (e: any) {
      // alert(6666666);
    }
    return true;
  };
  console.log("iiiii");

  return (
    <div>
      <p>This is Login Page {id}</p>
      <form onSubmit={handleSubmit}>
        <MyInput
          id="username"
          name="username"
          label="Username"
          width="40px"
          value={employeeData.username}
          onChange={($event: any) =>
            handleClick($event.target.value, "username")
          }
        />
        <br />
        <MyInput
          id="password"
          name="password"
          label="Password"
          width="40px"
          value={employeeData.password}
          onChange={($event: any) =>
            handleClick($event.target.value, "password")
          }
        />
        <br />
        <MyInput
          id="email"
          name="email"
          label="email"
          width="40px"
          value={employeeData.email}
          onChange={($event: any) => handleClick($event.target.value, "email")}
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default StateLogin;

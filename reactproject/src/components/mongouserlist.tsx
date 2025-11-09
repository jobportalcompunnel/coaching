import React, { useState, useRef, useEffect } from "react";
import MantraInput from "../package/mantrainput";
import axios from "axios";

interface FormData {
  name: string;
  mobile: string;
}

const Mongouserlist = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
  });
  const [mockData, setMockData] = useState<any>();
  const [fetchData, setFetchData] = useState<any>();

  useEffect(()=>{
       axios.get("http://localhost:7001/users/api/mock/2").then(res=>{
            setMockData(res.data);
       });
       fetch("http://localhost:7001/users/api/mock/2").then(res=>{
            if (!res.ok) {
                throw new Error('Network response was not ok Infinity');
            }
            return res.json();
        }).then(data => {
            setFetchData(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
        axios.post("http://localhost:7001/mongodb/api/mongousercreate", 
            {"name":"raghav2","age":"85","mobile":"987556466"}
        ).then(res=>{
            console.log(res);
        });
  },[]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log("Form Submitted!", formData);
  };

  return (
    <div>
      <form onSubmit={formHandler} id="test1">
        <br />
        <MantraInput
          label="Enter your name"
          name="name" // Add a name attribute to each input
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <MantraInput
          label="Enter your mobile number"
          name="mobile" // Add a name attribute to each input
          value={formData.mobile}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Save</button>
      </form>
      {JSON.stringify(formData)}
      {JSON.stringify(mockData)}
      {JSON.stringify(fetchData)}
    </div>
  );
};

export default Mongouserlist;
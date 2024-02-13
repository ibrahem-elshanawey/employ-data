import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Createemploy from './components/Createemploy';
import Employtable from './components/Employtable';
import { useCookies } from 'react-cookie';
function App() {
  const [employees, setEmployees] = useState([
    { code: 'EMP001', name: 'John Doe', salary: '200', date: '20/11/2015', jcode: '3015' },
    { code: 'EMP002', name: 'Jane Smith', salary: '2000', date: '20/11/2015', jcode: '3015' },
  ]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  //use cookies
  const [cookies, setCookie] = useCookies(['employeeData']);
  useEffect(() => {
    const employeeDataFromCookie = cookies.employeeData ? cookies.employeeData : [];
    setEmployees(employeeDataFromCookie);
  }, [cookies, setEmployees]);

  //delete function 
  const handleDelete = (employee) => {
    const updatedEmployees = employees.filter((emp) => emp.code !== employee.code);
    setEmployees(updatedEmployees)
    setCookie('employeeData', updatedEmployees);
  };
  //search function
  const handleSearch = (values) => {
    const { code, name } = values;

    const filtered = employees.filter((employee) => {

      if (code && employee.code.toLowerCase().includes(code.toLowerCase())) {
        return true;
      }
      if (name && (employee.name.toLowerCase().includes(name.toLowerCase()) || employee.salary.toLowerCase().includes(name.toLowerCase()))) {
        return true;
      }
      if (code === '' && name === '') {
        setFilteredEmployees(employees); // Show all results when both inputs are empty
      }
      return false;
    });
    setFilteredEmployees(filtered);

  };

  //create function
  const createemploy = (employ) => {
    setEmployees([...employees, employ]);
    setCookie('employeeData', [...employees, employ], { path: '/' });
  }
  //update function
  const updateEmployee = (updatedEmpl) => {
    setEmployees(updatedEmpl)
    setCookie('employeeData', updatedEmpl, { path: '/' });
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employtable employees={employees} handleDelete={handleDelete} handleSearch={handleSearch} filteredEmployees={filteredEmployees} updateEmployee={updateEmployee} />} ></Route>
          <Route path="/create" element={<Createemploy createemploy={createemploy} />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );

}
export default App;

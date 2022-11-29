//import React, {useEffect, useState} from 'react';
import React from "react";

import Table from "react-bootstrap/Table";
//const API_HOST = "http://localhost:3000";
//const INVENTORY_API_URL = `${API_HOST}/about`;

function About(props) {
  return (
    <div className="container">
      <h1>Simple Inventory Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>URL Value</th>
            <th>Application Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((info) => {
            return (
              <tr key={info.sl_no}>
                <td>{info.sl_no}</td>
                <td>{info.url_value}</td>
                <td>{info.appl_name}</td>
                <td>{info.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default About;

/*function About() {

    // data state variable defaulted to an empty array
    const [data, setData] = useState([]);
    // GET request function to your Mock API
    const fetchInventory = () => {
      fetch(`${INVENTORY_API_URL}`)
          .then(res => res.json())
          .then(json => setData(json));
          console.log(data);
    }
    // Calling the function on component mount
    useEffect(() => {
      fetchInventory();
  }, []);
    return (
     
      <div>
        <div className="container">
            <h1>Simple Inventory Table</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Sl.no</th>
                    <th>URL Value</th>
                    <th>Application Name</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                        data.map((item) => (
                            <tr key={item.sl_no}>
                                <td>{item.url_value}</td>
                                <td>{item.appl_name}</td>
                                <td>{item.status}</td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
      </div>
    );
}

export default About;*/

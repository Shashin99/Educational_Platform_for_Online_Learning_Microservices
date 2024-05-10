import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import MaterialTable from 'material-table'
import ButterToast, { Cinnamon } from "butter-toast"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import { Grid, TextField, Button, Card, Typography, Box } from '@material-ui/core'
import { useHistory } from "react-router-dom"

function MyCourse() {

  const [enrollData, setEnrollData] = useState([]);
  let history = useHistory();

  useEffect(async () => {
    onReload()
    if (localStorage.getItem('loginAccess')) {

    } else {
      history.push("/login")
    }
  }, []);

  const onReload = () => {
    const url = "http://localhost:4003/Enroll/userId/"+localStorage.getItem("id");
    axios
      .get(url)
      .then((response) => {
        console.log(response["data"])
        setEnrollData(response["data"])
      });
  }

  const onDelete = (id) => {
    const url = "http://localhost:4003/Enroll/";
    axios.delete(url + id).then((res) => {
      ButterToast.raise({
        content: <Cinnamon.Crisp title="Success!"
          content="Delete Successful!"
          scheme={Cinnamon.Crisp.SCHEME_GREEN}
          icon={<CheckCircleOutlineIcon />}
        />
      });
      onReload();
    });
  }

  const handleViewCourse = (courseId) => {
    history.push(`/viewCourse/${courseId}`);
  };

  const columns = [
    { title: "Name", field: "course_details.name"},
    { title: "Price", field: "course_details.price"},
    { title: "Status", field: "status"},
    { 
      title: "View Course", 
      field: "course_details._id",
      render: rowData => (
        <button onClick={() => handleViewCourse(rowData.course_details._id)}>Click</button>
      )
    }
  ]
  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        Enroll Details
      </Typography>
      <Card style={{ maxWidth: 80 + '%', padding: "20px 20px", margin: "0 auto" }}>
        <br />
        <MaterialTable title="Enroll Table" columns={columns} data={enrollData} style={{ maxWidth: 100 + '%', padding: "20px 5px", margin: "0 auto" }}
          options={{
            filtering: true,
            sorting: true,
            actionsColumnIndex: -1
          }
          }
          editable={{
            onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
              console.log(selectedRow)
              onDelete(selectedRow._id)
              setTimeout(() => resolve(), 300)
            })
          }} />
      </Card>
      <br />
    </div>
  );

}

export default MyCourse;


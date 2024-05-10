import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import MaterialTable from "material-table";
import ButterToast, { Cinnamon } from "butter-toast";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

function AllUsers() {
  const [user, setUser] = useState([]);

  useEffect(() => onReload(), []);

  const onReload = () => {
    const url = "http://localhost:4001/user";
    axios.get(url).then((response) => setUser(response["data"]));
  };

  const validation = (fname, lname, phone, email, privilege) => {
    console.log("bb");
    var Error = false;

    if (fname === "") {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Validation Error!"
            content="First Name Required!"
            scheme={Cinnamon.Crisp.SCHEME_RED}
            icon={<ErrorOutlineIcon />}
          />
        ),
      });
      Error = true;
    }

    if (lname === "") {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Validation Error!"
            content="Last Name Required!"
            scheme={Cinnamon.Crisp.SCHEME_RED}
            icon={<ErrorOutlineIcon />}
          />
        ),
      });
      Error = true;
    }

    if (phone === "") {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Validation Error!"
            content="Phone Required!"
            scheme={Cinnamon.Crisp.SCHEME_RED}
            icon={<ErrorOutlineIcon />}
          />
        ),
      });
      Error = true;
    }

    if (email === "") {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Validation Error!"
            content="Email Required!"
            scheme={Cinnamon.Crisp.SCHEME_RED}
            icon={<ErrorOutlineIcon />}
          />
        ),
      });
      Error = true;
    }

    if (privilege === "") {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Validation Error!"
            content="User Type Required!"
            scheme={Cinnamon.Crisp.SCHEME_RED}
            icon={<ErrorOutlineIcon />}
          />
        ),
      });
      Error = true;
    }

    if (Error) {
      return false;
    }

    return true;
  };

  const SubmitForm = async (newRow, oldRow) => {
    if (
      validation(
        newRow["fname"],
        newRow["lname"],
        newRow["contact_no"],
        newRow["email"],
        newRow["privilege"],
        newRow["access"]
      )
    ) {
      const url = "http://localhost:4001/user/" + oldRow["_id"];
      const data = JSON.stringify({
        fname: newRow["fname"],
        lname: newRow["lname"],
        contact_no: newRow["contact_no"],
        email: newRow["email"],
        privilege: newRow["privilege"],
        access: newRow["access"]
      });
      console.log(data);
      await axios
        .put(url, data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          console.log(res.data);
          onReload();
          ButterToast.raise({
            content: (
              <Cinnamon.Crisp
                title="Success!"
                content="Update Successful!"
                scheme={Cinnamon.Crisp.SCHEME_GREEN}
                icon={<CheckCircleOutlineIcon />}
              />
            ),
          });
        });
    }
  };

  const onDelete = (id) => {
    const url = "http://localhost:4001/user/";
    axios.delete(url + id).then((res) => {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Success!"
            content="Delete Successful!"
            scheme={Cinnamon.Crisp.SCHEME_GREEN}
            icon={<CheckCircleOutlineIcon />}
          />
        ),
      });
      onReload();
    });
  };

  const columns = [
    { title: "First Name", field: "fname" , editable: 'never' },
    { title: "Last Name", field: "lname" , editable: 'never' },
    { title: "Phone Number", field: "contact_no", type: "numeric" , editable: 'never' },
    { title: "Email", field: "email", type: "email" , editable: 'never' },
    {
      title: "Privilege",
      field: "privilege",
      lookup: { student: "student", admin: "admin", instructor: "instructor" },
    },
    {
      title: "Access",
      field: "access",
      lookup: { false: "Deny", true: "Allow" },
    },
  ];
  return (
    <div>
      <br />
      <MaterialTable
        title="Users Table"
        columns={columns}
        data={user}
        style={{
          maxWidth: "80%",
          padding: "20px 5px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
        options={{
          filtering: true,
          sorting: true,
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowUpdate: (newRow, oldRow) =>
            new Promise(async (resolve, reject) => {
              SubmitForm(newRow, oldRow);
              console.log(oldRow._id);
              setTimeout(() => resolve(), 300);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              console.log(selectedRow);
              onDelete(selectedRow._id);
              setTimeout(() => resolve(), 300);
            }),
        }}
      />
      <br />
    </div>
  );
}

export default AllUsers;

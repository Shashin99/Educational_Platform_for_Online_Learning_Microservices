import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import {
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
} from "@material-ui/core";
import ButterToast, { Cinnamon } from "butter-toast";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { useHistory } from "react-router-dom";

function UserRegister() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const inputRef = React.useRef();
    let history = useHistory();

    useEffect(async () => {
        if (localStorage.getItem("loginAccess")) {
        }
    }, []);

    const setFnameForm = (e) => {
        setFname(e.target.value);
    };

    const setLnameForm = (e) => {
        setLname(e.target.value);
    };

    const setPhoneForm = (e) => {
        setPhone(e.target.value);
    };

    const setEmailForm = (e) => {
        setEmail(e.target.value);
    };

    const setPasswordForm = (e) => {
        setPassword(e.target.value);
    };

    const setCpasswordForm = (e) => {
        setCpassword(e.target.value);
    };

    const onClear = () => {
        setLname("");
        setPhone("");
        setEmail("");
        setPassword("");
        setCpassword("");
        setFname("");
        inputRef.current.focus();
    };

    const validation = () => {
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

        if (password === "") {
            ButterToast.raise({
                content: (
                    <Cinnamon.Crisp
                        title="Validation Error!"
                        content="Password Required!"
                        scheme={Cinnamon.Crisp.SCHEME_RED}
                        icon={<ErrorOutlineIcon />}
                    />
                ),
            });
            Error = true;
        }

        if (cpassword === "") {
            ButterToast.raise({
                content: (
                    <Cinnamon.Crisp
                        title="Validation Error!"
                        content="Confirm Password Required!"
                        scheme={Cinnamon.Crisp.SCHEME_RED}
                        icon={<ErrorOutlineIcon />}
                    />
                ),
            });
            Error = true;
        } else if (password !== cpassword) {
            ButterToast.raise({
                content: (
                    <Cinnamon.Crisp
                        title="Validation Error!"
                        content="Password & Confirm Password Not Equal!"
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

    const SubmitForm = async (e) => {
        e.preventDefault();

        if (validation()) {
            const url = "http://localhost:4001/User";
            const data = JSON.stringify({
                fname: fname,
                lname: lname,
                contact_no: phone,
                email: email,
                password: password,
            });
            console.log(data);
            await axios
                .post(url, data, {
                    headers: { "Content-Type": "application/json" },
                })
                .then(async (res) => {
                    console.log(res);
                    if (res.data.err !== "connection") {
                        if (res.data.err === "email") {
                            setEmail("");
                            ButterToast.raise({
                                content: (
                                    <Cinnamon.Crisp
                                        title="Validation Error!"
                                        content="Email Already Exists!"
                                        scheme={Cinnamon.Crisp.SCHEME_RED}
                                        icon={<ErrorOutlineIcon />}
                                    />
                                ),
                            });
                        } else if (res.data.err !== "already") {
                            onClear();
                            ButterToast.raise({
                                content: (
                                    <Cinnamon.Crisp
                                        title="Success!"
                                        content="Insert Successful!"
                                        scheme={Cinnamon.Crisp.SCHEME_GREEN}
                                        icon={<CheckCircleOutlineIcon />}
                                    />
                                ),
                            });
                        } else {
                            ButterToast.raise({
                                content: (
                                    <Cinnamon.Crisp
                                        title="Validation Error!"
                                        content="Already Exists!"
                                        scheme={Cinnamon.Crisp.SCHEME_RED}
                                        icon={<ErrorOutlineIcon />}
                                    />
                                ),
                            });
                        }
                    } else {
                        ButterToast.raise({
                            content: (
                                <Cinnamon.Crisp
                                    title="Validation Error!"
                                    content="Connection Error!"
                                    scheme={Cinnamon.Crisp.SCHEME_RED}
                                    icon={<ErrorOutlineIcon />}
                                />
                            ),
                        });
                    }
                });
        }
    };

    return (
        <div className="App">
            <br />
            {/* <Typography gutterBottom variant="h3" align="center">
        User Register Form
      </Typography> */}
            <Grid>
                <Card
                    style={{
                        maxWidth: 50 + "%",
                        padding: "20px 5px",
                        margin: "0 auto",
                        backgroundColor: "#f5f5f5",
                        boxShadow: "0 10px 6px rgba(0, 0, 0, 0.16)",
                    }}
                >
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            style={{ fontFamily: "Arial", fontSize: "34px" }}
                        >
                            Register
                        </Typography>
                        <br />
                        <form autoComplete="off" onSubmit={SubmitForm}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        type="text"
                                        placeholder="First Name"
                                        inputRef={inputRef}
                                        autoFocus
                                        // label="First Name"
                                        variant="outlined"
                                        name="fname"
                                        value={fname}
                                        onChange={setFnameForm}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="text"
                                        placeholder="Last Name"
                                        // label="Last Name"
                                        variant="outlined"
                                        name="lname"
                                        value={lname}
                                        onChange={setLnameForm}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="number"
                                        placeholder="Phone Number"
                                        // label="Phone Number"
                                        variant="outlined"
                                        name="phone"
                                        value={phone}
                                        onChange={setPhoneForm}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="email"
                                        placeholder="Email"
                                        // label="Email"
                                        variant="outlined"
                                        name="email"
                                        value={email}
                                        onChange={setEmailForm}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="password"
                                        placeholder="Password"
                                        // label="Password"
                                        variant="outlined"
                                        name="password"
                                        value={password}
                                        onChange={setPasswordForm}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="password"
                                        placeholder="Confirm Password"
                                        // label="Confirm Password"
                                        variant="outlined"
                                        name="cpassword"
                                        value={cpassword}
                                        onChange={setCpasswordForm}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                    >
                                        Submit
                                    </Button>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => onClear()}
                                        fullWidth
                                    >
                                        Clear
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
            <br />
        </div>
    );
}

export default UserRegister;

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
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline"

function UserRegister() {

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
                        <form>
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

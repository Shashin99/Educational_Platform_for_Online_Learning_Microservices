import React from "react";
import "../App.css";
import { Grid, Button, Typography } from "@material-ui/core";

function Student() {
    const logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };

    return (
        <div className="App">
            <br />

            <div
                style={{
                    maxWidth: 80 + "%",
                    padding: "20px 5px",
                    margin: "0 auto",
                    align: "center",
                    marginLeft: 15 + "%",
                }}
            >
                <Typography gutterBottom variant="h3" align="center">
                    Student Dashboard
                </Typography>

                <Grid item xs={12}>
                    <Button
                        href="/courselist"
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Find Course
                    </Button>
                </Grid>
                <br />
                <Grid item xs={12}>
                    <Button
                        href="/myCourse"
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        My Enroll Course
                    </Button>
                </Grid>
                <br />
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => logout()}
                        fullWidth
                    >
                        Logout
                    </Button>
                </Grid>
            </div>

            <br />
        </div>
    );
}

export default Student;

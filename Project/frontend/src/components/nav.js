import React from "react";
import "../App.css";
import {
    AppBar,
    Avatar,
    Button,
    Toolbar,
    Typography,
    Container,
} from "@mui/material";
import { Box } from "@mui/system";
import "bootstrap/dist/css/bootstrap.min.css";

class nav extends React.Component {
    Logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };

    render() {
        if (localStorage.getItem("loginAccess") !== "true") {
            return (
                <AppBar position="sticky">
                    <Container maxWidth="xl">
                        <Toolbar
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography variant="h5">EduWave</Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                }}
                            >
                                <Typography variant="span"></Typography>
                                <Avatar
                                    sx={{ width: 30, height: 30 }}
                                    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                />
                                <Button
                                    href="/login"
                                    sx={{
                                        color: "text.primary",
                                        bgcolor: "greentext.primary",
                                    }}
                                >
                                    Login
                                </Button>
                                <Button
                                    href="/register"
                                    sx={{
                                        color: "text.primary",
                                        bgcolor: "greentext.primary",
                                    }}
                                >
                                    Register
                                </Button>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            );
        } else {
            if (localStorage.getItem("type") === "admin") {
                return (
                    <AppBar position="sticky">
                        <Container maxWidth="xl">
                            <Toolbar
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography variant="h5">Course Web</Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <Typography variant="span"></Typography>
                                    <Avatar
                                        sx={{ width: 30, height: 30 }}
                                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    />
                                    <Button
                                        href="/admin"
                                        sx={{
                                            color: "text.primary",
                                            bgcolor: "greentext.primary",
                                        }}
                                    >
                                        Dashboard
                                    </Button>
                                    <Button
                                        onClick={() => this.Logout()}
                                        sx={{
                                            color: "text.primary",
                                            bgcolor: "greentext.primary",
                                        }}
                                    >
                                        Logout
                                    </Button>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                );
            } else if (localStorage.getItem("type") === "instructor") {
                return (
                    <AppBar position="sticky">
                        <Container maxWidth="xl">
                            <Toolbar
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography variant="h5">EduWave</Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <Typography variant="span"></Typography>
                                    <Avatar
                                        sx={{ width: 30, height: 30 }}
                                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    />
                                    <Button
                                        href="/instructor"
                                        sx={{
                                            color: "text.primary",
                                            bgcolor: "greentext.primary",
                                        }}
                                    >
                                        Dashboard
                                    </Button>
                                    <Button
                                        onClick={() => this.Logout()}
                                        sx={{
                                            color: "text.primary",
                                            bgcolor: "greentext.primary",
                                        }}
                                    >
                                        Logout
                                    </Button>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                );
            } else {
                return (
                    <AppBar position="sticky">
                        <Container maxWidth="xl">
                            <Toolbar
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography variant="h5">EduWave</Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <Typography variant="span"></Typography>
                                    <Avatar
                                        sx={{ width: 30, height: 30 }}
                                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    />
                                    <Button
                                        href="/student"
                                        sx={{
                                            color: "text.primary",
                                            bgcolor: "greentext.primary",
                                        }}
                                    >
                                        Dashboard
                                    </Button>
                                    <Button
                                        onClick={() => this.Logout()}
                                        sx={{
                                            color: "text.primary",
                                            bgcolor: "greentext.primary",
                                        }}
                                    >
                                        Logout
                                    </Button>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                );
            }
        }
    }
}

export default nav;

import React from "react";
import "../App.css";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import {
    AppBar,
    Box,
    Container,
    Divider,
    Grid,
    Stack,
    Toolbar,
    Typography,
    Link as MuiLink,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

class footer extends React.Component {
    Logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };

    render() {
        return (
            <Box>
                <Divider />
                {/* <Container container justify="center" style={{ minHeight: "212px" }}> */}
                <Container maxWidth="xl">
                    <Toolbar>
                        <Grid container item columnSpacing={2} pt={2}>
                            <Grid item sm={3} xs={12}>
                                <Typography
                                    variant="h4"
                                    sx={{ fontFamily: "David Libre" }}
                                    fontWeight={200}
                                >
                                    EduWave
                                </Typography>
                                <Stack
                                    p={1}
                                    gap={0.5}
                                    sx={{ color: "text.secondary" }}
                                >
                                    <Typography paragraph>
                                        <Facebook color="action" />{" "}
                                        <Instagram color="action" />
                                        <Twitter color="action" />{" "}
                                        <YouTube color="action" />
                                    </Typography>
                                </Stack>
                            </Grid>

                            <Grid
                                item
                                sm={3}
                                xs={11}
                                sx={{ color: "text.primary" }}
                            >
                                <Typography variant="h5" fontWeight={500}>
                                    Quick Links
                                </Typography>
                                <Stack
                                    p={1}
                                    gap={0.5}
                                    sx={{ color: "text.secondary" }}
                                >
                                    <a href=" ">Courses</a>
                                    <a href=" ">Terms & Conditions</a>
                                </Stack>
                            </Grid>
                            <Grid
                                item
                                sm={4}
                                xs={11}
                                sx={{ color: "text.primary" }}
                            >
                                <Typography variant="h5" fontWeight={500}>
                                    Contact Us
                                </Typography>
                                <Stack
                                    p={1}
                                    gap={0.5}
                                    sx={{ color: "text.secondary" }}
                                >
                                    <MuiLink
                                        underline="hover"
                                        sx={{
                                            color: "inherit",
                                        }}
                                        href="tel:0718203888"
                                    >
                                        Contact and Support : 071 120 154 / 071
                                        111 2222
                                    </MuiLink>

                                    <MuiLink
                                        underline="hover"
                                        sx={{
                                            color: "inherit",
                                        }}
                                        href="https://goo.gl/maps/E5fqtBCg7xgCUomJ9"
                                    >
                                        Address : No.89, ABC Road, XYZ
                                    </MuiLink>
                                </Stack>
                            </Grid>
                            <Grid
                                item
                                sm={2}
                                xs={11}
                                sx={{ color: "text.primary" }}
                            >
                                <Typography variant="h5" fontWeight={500}>
                                    Payment Options
                                </Typography>
                                <Stack
                                    p={1}
                                    gap={0.5}
                                    sx={{ color: "text.secondary" }}
                                >
                                    <img
                                        alt="payment options"
                                        style={{
                                            height: "150px",
                                            width: "150px",
                                        }}
                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>

                <AppBar
                    position="static"
                    elevation={0}
                    component="footer"
                    color="default"
                >
                    <Toolbar style={{ justifyContent: "center" }}>
                        <Typography variant="caption">©2024</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}

export default footer;

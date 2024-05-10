import React, { useState , useEffect } from "react"
import "../App.css"
import axios from "axios"
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core'
import ButterToast, { Cinnamon } from "butter-toast"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import { useHistory } from "react-router-dom"

function UserVerification() {


  return (
    <div className="App">
      <br/>
      <Typography gutterBottom variant="h3" align="center">
        User Verification
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 50+'%', padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              OTP Code
            </Typography>
            <br />
            <form autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField type="email"
                    placeholder="Email"
                    inputRef={inputRef}
                    disabled
                    label="Email"
                    variant="outlined"
                    name="email"
                    
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number"
                    placeholder="OTP Code"
                    inputRef={inputRef}
                    autoFocus
                    label="OTP Code"
                    variant="outlined"
                    name="code"
                   
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="secondary"
                
                    fullWidth
                  >Clear</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <br/>
    </div>
  );
}

export default UserVerification;
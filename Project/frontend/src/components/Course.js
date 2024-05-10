import React, { useState , useEffect } from "react"
import "../App.css"
import axios from "axios"
import { Grid, TextField, Button, Card, CardContent, Typography, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'

function Course() {

  return (
    <div className="App">
      <br/>
      <Typography gutterBottom variant="h3" align="center">
        Add New Course
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 50+'%', padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Course Details
            </Typography>
            <br />
            <form autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField type="text"
                    placeholder="Course Name"
                    label="Course Name"
                    variant="outlined"
                    name="name"
                    
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="text"
                    placeholder="Course Note 1"
                    label="Course Note 1"
                    variant="outlined"
                    name="note1"
                    minRows={3}
                    multiline
                    
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="text"
                    placeholder="Course Note 2"
                    label="Course Note 2"
                    variant="outlined"
                    name="note2"
                    minRows={3}
                    multiline
                    
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="text"
                    placeholder="Course Note 3"
                    label="Course Note 3"
                    variant="outlined"
                    name="note3"
                    minRows={3}
                    multiline
                    
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="text"
                    placeholder="Course Note 4"
                    label="Course Note 4"
                    variant="outlined"
                    name="note4"
                    minRows={3}
                    multiline
                    
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="text"
                    placeholder="Course Note 5"
                    label="Course Note 5"
                    variant="outlined"
                    name="note5"
                    minRows={3}
                    multiline
                    
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number"
                    placeholder="Course Fee"
                    label="Course Fee"
                    inputProps={{ min: 1 }}
                    variant="outlined"
                    name="price"
                    
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="text"
                    placeholder="Quiz Details"
                    label="Quiz Details"
                    minRows={3}
                    multiline
                    variant="outlined"
                    name="quiz_details"
                    
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="file"
                    accept="image/*"
                    placeholder="Video"
                    label="Video"
                    variant="outlined"
        
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

export default Course;
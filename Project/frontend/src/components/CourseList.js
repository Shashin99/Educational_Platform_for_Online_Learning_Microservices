import React, { useState , useEffect } from "react"
import "../App.css"
import { Grid , Card, CardContent, Typography } from '@material-ui/core'

function CourseList() {

 
  return (
    <div className="App">
      <br/>
      <Typography gutterBottom variant="h3" align="center">
        All Course
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 80+'%', padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              All Course
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <br/>
    </div>
  );
}

export default CourseList;
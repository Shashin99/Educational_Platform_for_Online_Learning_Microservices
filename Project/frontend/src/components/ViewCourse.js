import React, { useState, useEffect } from "react";
import "../App.css";

function ViewCourse() {

 
  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        Course Details
      </Typography>
      <Card style={{ maxWidth: 80 + '%', padding: "20px 20px", margin: "0 auto" }}>
        <div class="container">
          <br /><br />
          <div class="justify-content-center">
            <h2>Course Data</h2>
            
          </div>
        </div>
      </Card>
      <br />
    </div>
  );

}

export default ViewCourse;


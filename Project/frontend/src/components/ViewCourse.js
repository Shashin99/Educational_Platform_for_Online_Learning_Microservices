import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Button, Card, Typography, Box } from '@material-ui/core'
import { useHistory } from "react-router-dom"

function ViewCourse(props) {

  const [course_data, setCourseData] = useState([]);
  const [lec1, setLec1] = useState(false);
  const [lec2, setLec2] = useState(false);
  const [lec3, setLec3] = useState(false);
  const [lec4, setLec4] = useState(false);
  const [lec5, setLec5] = useState(false);
  let history = useHistory();

  useEffect(async () => {
    await onReload()
    if (localStorage.getItem('loginAccess')) {

    } else {
      history.push("/login")
    }
  }, []);

  const onReload = async () => {

    console.log(props.match.params.id)
    const url = "http://localhost:4004/course/" + props.match.params.id
    await axios
      .get(url)
      .then((response) => {
        console.log(response["data"])
        setCourseData(response["data"])
      })
  }

  const lec_click = async (id) => {
    console.log(id)
    if (id == 1) {
      setLec1(true)
      const url = "http://localhost:4002/Learner";
      const data = JSON.stringify({
        course_id: props.match.params.id,
        user_id: localStorage.getItem("id"),
        note1: true
      });
      console.log(data);
      await axios
        .post(url, data, {
          headers: { "Content-Type": "application/json" },
        })
        .then(async (res) => {
          console.log(res.data.data);
        });
    } else if (id == 2) {
      setLec2(true)
      const url = "http://localhost:4002/Learner";
      const data = JSON.stringify({
        course_id: props.match.params.id,
        user_id: localStorage.getItem("id"),
        note2: true
      });
      console.log(data);
      await axios
        .post(url, data, {
          headers: { "Content-Type": "application/json" },
        })
        .then(async (res) => {
          console.log(res.data.data);
        });
    } else if (id == 3) {
      setLec3(true)
      const url = "http://localhost:4002/Learner";
      const data = JSON.stringify({
        course_id: props.match.params.id,
        user_id: localStorage.getItem("id"),
        note3: true
      });
      console.log(data);
      await axios
        .post(url, data, {
          headers: { "Content-Type": "application/json" },
        })
        .then(async (res) => {
          console.log(res.data.data);
        });
    } else if (id == 4) {
      setLec4(true)
      const url = "http://localhost:4002/Learner";
      const data = JSON.stringify({
        course_id: props.match.params.id,
        user_id: localStorage.getItem("id"),
        note4: true
      });
      console.log(data);
      await axios
        .post(url, data, {
          headers: { "Content-Type": "application/json" },
        })
        .then(async (res) => {
          console.log(res.data.data);
        });
    } else if (id == 5) {
      setLec5(true)
      const url = "http://localhost:4002/Learner";
      const data = JSON.stringify({
        course_id: props.match.params.id,
        user_id: localStorage.getItem("id"),
        note5: true
      });
      console.log(data);
      await axios
        .post(url, data, {
          headers: { "Content-Type": "application/json" },
        })
        .then(async (res) => {
          console.log(res.data.data);
        });
    }
  }

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
            <hr />
            <div class="card">
              <br />
              <h5 class="card-title">{"Course Name : " + course_data.name}</h5>
              <hr />
              <h5 class="card-title">{"Quiz Details : " + course_data.quiz_details}</h5>
              {course_data.video_link && (
                <div style={{ width: '350px', height: '250px' }}>
                  <video controls style={{ width: '100%', height: '100%' }}>
                    <source src={"http://localhost:4004/" + course_data.video_link} type="video/mp4" />
                  </video>
                </div>)}
              <h2 onClick={() => lec_click(1)}>Lecture Note 1</h2>
              {lec1 && (
                <p>{course_data.note1}</p>
              )}
              <h2 onClick={() => lec_click(2)}>Lecture Note 2</h2>
              {lec2 && (
                <p>{course_data.note2}</p>
              )}
              <h2 onClick={() => lec_click(3)}>Lecture Note 3</h2>
              {lec3 && (
                <p>{course_data.note3}</p>
              )}
              <h2 onClick={() => lec_click(4)}>Lecture Note 4</h2>
              {lec4 && (
                <p>{course_data.note4}</p>
              )}
              <h2 onClick={() => lec_click(5)}>Lecture Note 5</h2>
              {lec5 && (
                <p>{course_data.note5}</p>
              )}
            </div>
          </div>
        </div>
      </Card>
      <br />
    </div>
  );

}

export default ViewCourse;


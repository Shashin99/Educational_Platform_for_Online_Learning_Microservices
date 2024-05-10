import React, { useState , useEffect } from "react"
import "../App.css"
import axios from "axios"
import { Grid, TextField, Button, Card, CardContent, Typography, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'
import ButterToast, { Cinnamon } from "butter-toast"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import { useHistory } from "react-router-dom"

function Course() {

  const [video_link, setVideo_link] = useState('');
  const [name, setName] = useState('');
  const [note1, setNote1] = useState('');
  const [note2, setNote2] = useState('');
  const [note3 , setNote3 ] = useState('');
  const [note4, setNote4] = useState('');
  const [note5, setNote5] = useState('');
  const [price , setPrice] = useState('');
  const [quiz_details , setQuiz_details] = useState('');
  const inputRef = React.useRef();
  let history = useHistory();

  useEffect(async() => {
    if(localStorage.getItem('loginAccess')){
      
    }else{
      history.push("/login")
    }
  }, []);

  const setNameForm = (e) => {
    setName(e.target.value)
  }

  const setQuiz_detailsForm = (e) => {
    setQuiz_details(e.target.value)
  }

  const setPriceForm = (e) => {
    setPrice(e.target.value)
  }

  const setVideo_linkForm = (e) => {
    var selectedFile=e.target.files[0]
    const data = new FormData() 
    data.append('file', selectedFile)
    axios.post("http://localhost:4004/Course/upload", data, { 
    }).then(res => { 
        console.log(res.data.filename)
        setVideo_link (res.data.filename)
    })
  }

  const setNote1Form = (e) => {
    setNote1(e.target.value)
  }

  const setNote2Form = (e) => {
    setNote2(e.target.value)
  }

  const setNote3Form = (e) => {
    setNote3(e.target.value)
  }

  const setNote4Form = (e) => {
    setNote4(e.target.value)
  }

  const setNote5Form = (e) => {
    setNote5(e.target.value)
  }
  
  const onClear = () => {
    setQuiz_details('')
    setPrice('')
    setVideo_link('')
    setNote1('')
    setNote2('')
    setNote3 ('')
    setNote4('')
    setNote5('')
  }

  const validation = () => {
    var Error = false;
    
    if (name === "") {
      ButterToast.raise({
        content: <Cinnamon.Crisp title="Validation Error!"
          content="Course Name Required!"
          scheme={Cinnamon.Crisp.SCHEME_RED}
          icon={<ErrorOutlineIcon />}
        />
      })
      Error = true;
    }
    
    if (price === "") {
      ButterToast.raise({
        content: <Cinnamon.Crisp title="Validation Error!"
          content="Course Fee Required!"
          scheme={Cinnamon.Crisp.SCHEME_RED}
          icon={<ErrorOutlineIcon />}
        />
      })
      Error = true;
    }
    
    if (video_link === "") {
      ButterToast.raise({
        content: <Cinnamon.Crisp title="Validation Error!"
          content="Video_link Required!"
          scheme={Cinnamon.Crisp.SCHEME_RED}
          icon={<ErrorOutlineIcon />}
        />
      })
      Error = true;
    }
    
    if (note1 === "") {
      ButterToast.raise({
        content: <Cinnamon.Crisp title="Validation Error!"
          content="Course Note 1 Required!"
          scheme={Cinnamon.Crisp.SCHEME_RED}
          icon={<ErrorOutlineIcon />}
        />
      })
      Error = true;
    }
    
    if (note2 === "") {
      ButterToast.raise({
        content: <Cinnamon.Crisp title="Validation Error!"
          content="Note2 Required!"
          scheme={Cinnamon.Crisp.SCHEME_RED}
          icon={<ErrorOutlineIcon />}
        />
      })
      Error = true;
    }
    
    if (note3  === "") {
      ButterToast.raise({
        content: <Cinnamon.Crisp title="Validation Error!"
          content="Note3 Required!"
          scheme={Cinnamon.Crisp.SCHEME_RED}
          icon={<ErrorOutlineIcon />}
        />
      })
      Error = true;
    }
    
    if (note4 === "") {
      ButterToast.raise({
        content: <Cinnamon.Crisp title="Validation Error!"
          content="Note4 Required!"
          scheme={Cinnamon.Crisp.SCHEME_RED}
          icon={<ErrorOutlineIcon />}
        />
      })
      Error = true;
    }

    if (quiz_details === "") {
      ButterToast.raise({
        content: <Cinnamon.Crisp title="Validation Error!"
          content="Due Months Required!"
          scheme={Cinnamon.Crisp.SCHEME_RED}
          icon={<ErrorOutlineIcon />}
        />
      })
      Error = true;
    }
    
    if (note5 === "") {
      ButterToast.raise({
        content: <Cinnamon.Crisp title="Validation Error!"
          content="Video_link Materials Required!"
          scheme={Cinnamon.Crisp.SCHEME_RED}
          icon={<ErrorOutlineIcon />}
        />
      })
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

      const url = "http://localhost:4004/Course";
      const data = JSON.stringify({
        name: name,
        video_link: video_link,
        price: price,
        note1: note1,
        note2: note2,
        note3 : note3 ,
        note4: note4,
        note5: note5,
        quiz_details:quiz_details
      });
      console.log(data);
      await axios
        .post(url, data, {
          headers: { "Content-Type": "application/json" },
        })
        .then(async(res) => {
          console.log(res.data.data);
          if(res.data.data==="success"){
            onClear()
            ButterToast.raise({
              content: <Cinnamon.Crisp title="Success!"
                content="Successful!"
                scheme={Cinnamon.Crisp.SCHEME_GREEN}
                icon={<CheckCircleOutlineIcon />}
              />
            })
          }else{
            ButterToast.raise({
              content: <Cinnamon.Crisp title="Connection Error!"
                content="Unsuccessful!"
                scheme={Cinnamon.Crisp.SCHEME_RED}
                icon={<ErrorOutlineIcon />}
              />
            })
          }
        });
    }
  };

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
            <form autoComplete="off" onSubmit={SubmitForm}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField type="text"
                    placeholder="Course Name"
                    label="Course Name"
                    variant="outlined"
                    name="name"
                    value={name}
                    onChange={setNameForm}
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
                    value={note1}
                    onChange={setNote1Form}
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
                    value={note2}
                    onChange={setNote2Form}
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
                    value={note3}
                    onChange={setNote3Form}
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
                    value={note4}
                    onChange={setNote4Form}
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
                    value={note5}
                    onChange={setNote5Form}
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number"
                    placeholder="Course Fee"
                    label="Course Fee"
                    inputProps={{ min: 1 }}
                    variant="outlined"
                    name="price"
                    value={price}
                    onChange={setPriceForm}
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
                    value={quiz_details}
                    onChange={setQuiz_detailsForm}
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="file"
                    accept="image/*"
                    placeholder="Video"
                    label="Video"
                    variant="outlined"
                    name="video_link"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      accept: 'video/*'
                    }}
                    onChange={setVideo_linkForm}
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => onClear()}
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
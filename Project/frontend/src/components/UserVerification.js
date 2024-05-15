import React, { useState , useEffect } from "react"
import "../App.css"
import axios from "axios"
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core'
import ButterToast, { Cinnamon } from "butter-toast"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import { useHistory } from "react-router-dom"

function UserVerification() {

  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();
  const inputRef = React.useRef();

  useEffect(() => {
    console.log(history.location.state.email)
    setEmail(history.location.state.email)
  });

  const setCodeForm = (e) => {
    setCode(e.target.value)
  }

  const onClear = () => {
    setCode('')
    inputRef.current.focus()
  }

  const validation = () => {
    var Error = false;

    if (code === "") {
      ButterToast.raise({
        content: <Cinnamon.Crisp title="Validation Error!"
          content="Code Required!"
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

      const url = "http://localhost:4001/User/otp";
      const data = JSON.stringify({
        email: email,
        code: code,
      });
      console.log(data);
      
      await axios
        .post(url, data, {
          headers: { "Content-Type": "application/json" },
        })
        .then(async(res) => {
          console.log(res.data.err);
          if(res.data.err!=="User not found"){
            if(res.data.err==="Incorrect Code"){
              onClear()
              ButterToast.raise({
                content: <Cinnamon.Crisp title="Incorrect Error!"
                content="Incorrect Code!"
                  scheme={Cinnamon.Crisp.SCHEME_RED}
                  icon={<ErrorOutlineIcon />}
                />
              })
            }else if(res.data.err==="Try Again"){
              ButterToast.raise({
                content: <Cinnamon.Crisp title="Connection Error!"
                  content="Try Again!"
                  scheme={Cinnamon.Crisp.SCHEME_RED}
                  icon={<ErrorOutlineIcon />}
                />
              })
            }else{
              ButterToast.raise({
                content: <Cinnamon.Crisp title="Success!"
                  content="Account Verify Successful!"
                  scheme={Cinnamon.Crisp.SCHEME_GREEN}
                  icon={<CheckCircleOutlineIcon />}
                />
              })
              history.push("/login")
            }
          }else{
            ButterToast.raise({
              content: <Cinnamon.Crisp title="Data Error!"
                content="User not found!"
                scheme={Cinnamon.Crisp.SCHEME_RED}
                icon={<ErrorOutlineIcon />}
              />
            })
          }
        }).catch(function(error) {
          console.log(error);
        })


    }
  };

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
            <form autoComplete="off" onSubmit={SubmitForm}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField type="email"
                    placeholder="Email"
                    inputRef={inputRef}
                    disabled
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={email}
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
                    value={code}
                    onChange={setCodeForm}
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

export default UserVerification;
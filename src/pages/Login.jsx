import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  text_s: {
    height: theme.spacing(3),
  },
}));

const Login = observer(() => {
  const { store } = useContext(Context);
  const history = useHistory();

  const classes = useStyles();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(
    "password cannot be empty"
  );
  const [nameError, setNameError] = useState("email cannot be empty");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [formValid, setFormvalid] = useState(false);

  useEffect(() => {
    if (nameError || passwordError) {
      setFormvalid(false);
    } else {
      setFormvalid(true);
    }
  }, [passwordError, nameError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3) {
      setPasswordError("password must be more than 3 characters");
      if (!e.target.value) {
        setPasswordError("password cannot be empty");
      }
    } else {
      setPasswordError("");
    }
  };
  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameError("name must be more than 2 characters");
      if (!e.target.value) {
        setNameError("name cannot be empty");
      }
    } else {
      setNameError("");
    }
  };
  const handleClick = () => {
    store.setAuth(true);
    store.setName(name);
    history.push("select");
  };

  console.log(store.isAuth);
  console.log(store.name);
  return (
    <div className="app">
      <div className="login">
        <div className="login_ava">
          <Avatar className={classes.large} />
        </div>
        {nameDirty && nameError && (
          <div className="login_er_p">{nameError}</div>
        )}
        <div className="  ">
          <TextField
            name="name"
            label="User name "
            variant="outlined"
            style={{ height: 40 }}
            margin="dense"
            onBlur={(e) => blurHandler(e)}
            value={name}
            onChange={(e) => nameHandler(e)}
          />
        </div>

        <div>
          {passwordDirty && passwordError && (
            <div className="login_er_p">{passwordError}</div>
          )}
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            style={{ height: 40 }}
            margin="dense"
            onBlur={(e) => blurHandler(e)}
            value={password}
            onChange={(e) => passwordHandler(e)}
          />
        </div>
        <div className="log_div">
          <Button
            variant="contained"
            color="primary"
            className="login_butt"
            disabled={!formValid}
            onClick={handleClick}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
});

export default Login;

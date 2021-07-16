import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  text_s: {
    height: theme.spacing(3),
  },
  table: {
    minWidth: 500,
  },
}));

const Main = observer(() => {
  const { store } = useContext(Context);
  let history = useHistory();

  const classes = useStyles();
  const [makee, setMakee] = useState("");
  const [modell, setModell] = useState("");
  const [yearr, setYearr] = useState("");

  const hanldleAdd = () => {
    store.setAutos([makee, modell, yearr]);
    setMakee("");
    setModell("");
    setYearr("");
  };
  console.log(makee, modell, yearr);
  console.log(store.auto);
  return (
    <div className="main">
      <Header />
      <div className="padd">
        <div>
          <Button variant="contained" onClick={() => history.goBack()}>
            go back
          </Button>
        </div>
        <div className="form_div_center">
          <div className="form_div">
            <div className="form_text">
              <TextField
                label="VIN number"
                variant="outlined"
                fullWidth
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                margin="dense"
                className="form_text_t"
              />
            </div>
            <div className="form_text">
              <TextField
                label="Make"
                variant="outlined"
                fullWidth
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                margin="dense"
                className="form_text_t"
                value={makee}
                onChange={(e) => setMakee(e.target.value)}
              />
            </div>
            <div className="form_text">
              <TextField
                label="Model"
                variant="outlined"
                fullWidth
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                margin="dense"
                className="form_text_t"
                value={modell}
                onChange={(e) => setModell(e.target.value)}
              />
            </div>
            <div className="form_text">
              <TextField
                label="Year"
                variant="outlined"
                fullWidth
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                margin="dense"
                className="form_text_t"
                value={yearr}
                onChange={(e) => setYearr(e.target.value)}
              />
            </div>
            <div className="form_text">
              <TextField
                label="Engine"
                variant="outlined"
                fullWidth
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                margin="dense"
                className="form_text_t"
              />
            </div>
            <div className="form_text">
              <TextField
                label="Transmision"
                variant="outlined"
                fullWidth
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                margin="dense"
                className="form_text_t"
              />
            </div>
            <div className="form_text">
              <TextField
                label="Color(ext)"
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                margin="dense"
                className="form_text_r"
              />
              <TextField
                label="Color(int)"
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                margin="dense"
                className="form_text_l"
              />
            </div>
            <div className="form_text">
              <TextField
                label="Mileage"
                variant="outlined"
                fullWidth
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                margin="dense"
                className="form_text_t"
              />
            </div>
            <div className="form_text">
              <TextField
                label="P\N"
                variant="outlined"
                fullWidth
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                margin="dense"
                className="form_text_t"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="padd">
        <div className="form_div_center">
          <div className="  ">
            <div className="count">
              <div>
                {" "}
                <TextField
                  id="outlined-basic"
                  label="Count number"
                  variant="outlined"
                  style={{
                    backgroundColor: "white",
                    width: "135px",
                    margin: 4,
                    height: 40,
                  }}
                  margin="dense"
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Quentity"
                  variant="outlined"
                  style={{
                    backgroundColor: "white",
                    height: 40,
                    width: "135px",
                    margin: 4,
                  }}
                  margin="dense"
                />
              </div>
            </div>
            <div className="button_center">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="button_center_b"
                onClick={hanldleAdd}
              >
                Generate label{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className="list_items">
          <div>
            <p className="list_items_his">History</p>
          </div>
          <div className="list_items_rec">
            <div className="list_items_title">
              <div className="list_items_title_1">Make</div>
              <div className="list_items_title_1">Model</div>
              <div className="list_items_title_1">Year</div>
              <div className="list_items_title_1">Begin No</div>
              <div className="list_items_title_1">End No</div>
            </div>
            {store.auto.map((item) => (
              <div className="list_items_content">
                <div className="list_items_title_2">{item[0]}</div>
                <div className="list_items_title_2">{item[1]}</div>
                <div className="list_items_title_2">{item[2]}</div>
                <div className="list_items_title_2">Begin No</div>
                <div className="list_items_title_2">End No</div>
              </div>
            ))}

            {/* <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell>Make</TableCell>
                    <TableCell align="right">Model</TableCell>
                    <TableCell align="right">Year</TableCell>
                    <TableCell align="right">Begin No</TableCell>
                    <TableCell align="right">End No</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer> */}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Main;

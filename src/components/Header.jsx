import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { useQueryParams } from "../hooks/useQueryParams";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sma: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const Header = observer(() => {
  const classes = useStyles();
  const { store } = useContext(Context);
  const query = useQueryParams();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const queryComp = query.get("comp");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickOut = () => {
    store.setAuth(false);
    store.setName("");
    history.push("/");
  };
  console.log(queryComp);
  return (
    <div className="header">
      <div></div>
      {queryComp ? (
        <div>
          <img src={"./" + queryComp + ".JPG"} className="header_img" />
        </div>
      ) : (
        <></>
      )}

      <div className="header_div_right">
        <div className="header_div">
          <p className="header_div_p">{store.name}</p>
        </div>
        <div className="header_div">
          <Avatar className={classes.sma} onClick={handleClick} />
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClickOut}>Log out</MenuItem>
            <MenuItem onClick={handleClickOut}>My account</MenuItem>
            <MenuItem onClick={handleClickOut}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
});

export default Header;

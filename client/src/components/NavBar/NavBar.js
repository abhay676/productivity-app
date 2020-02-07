import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonContainer = styled.span`
  border: 1px solid #fff;
  margin: 2px;
`;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ color: "#fff" }}>
              #Non-sense Productivity (NSP)
            </Link>
          </Typography>
          <ButtonContainer>
            <Link className="btn" to="/login" style={{ color: "#fff" }}>
              Login
            </Link>
          </ButtonContainer>
          <ButtonContainer>
            <Link className="btn" to="/register" style={{ color: "#fff" }}>
              Register
            </Link>
          </ButtonContainer>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#3f51b5" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flex: 1 }}>
          LegalAssistant
        </Typography>
        <Button color="inherit" component={Link} to="/contract-review">
          Contract Review
        </Button>
        <Button color="inherit" component={Link} to="/document-generation">
          Document Generation
        </Button>
        <Button color="inherit" component={Link} to="/corruption-reporting">
          Corruption Reporting
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

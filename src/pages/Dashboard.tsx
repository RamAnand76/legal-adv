import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Welcome to LegalAssistant
      </Typography>
      <Typography variant="h6" paragraph>
        Your one-stop solution for contract review, document generation, and legal assistance.
      </Typography>
      <Button component={Link} to="/contract-review" variant="contained" color="primary">
        Start Contract Review
      </Button>
    </Box>
  );
};

export default Dashboard;

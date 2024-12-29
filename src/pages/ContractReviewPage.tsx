import React, { useState } from "react";
import { Box, Typography, Button, TextField, Card, CardContent } from "@mui/material";

const ContractReviewPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleReview = () => {
    if (file) {
      // Logic for contract analysis (mock)
      setAnalysis("This contract contains potential risks under Section 123 of IPC.");
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Contract Review
      </Typography>
      <Card>
        <CardContent>
          <input type="file" onChange={handleFileUpload} />
          <Button variant="contained" color="primary" onClick={handleReview}>
            Review Contract
          </Button>
          {analysis && (
            <Box marginTop={2}>
              <Typography variant="body1">{analysis}</Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContractReviewPage;

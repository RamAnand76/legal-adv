import React, { useState } from "react";
import { Box, Typography, TextField, Button, Card, CardContent } from "@mui/material";

const DocumentGenerationPage: React.FC = () => {
  const [documentType, setDocumentType] = useState<string>("");
  const [generatedDocument, setGeneratedDocument] = useState<string | null>(null);

  const handleGenerateDocument = () => {
    if (documentType) {
      // Mock document generation logic
      setGeneratedDocument(`Generated ${documentType} document based on compliance with Indian laws.`);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Document Generation
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Choose Document Type
          </Typography>
          <TextField
            label="Enter Document Type (e.g., Contract, NDA)"
            variant="outlined"
            fullWidth
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateDocument}
            fullWidth
          >
            Generate Document
          </Button>
          {generatedDocument && (
            <Box marginTop={2}>
              <Typography variant="body1">{generatedDocument}</Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default DocumentGenerationPage;

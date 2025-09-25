import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, type ChangeEvent } from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function Homepage() {
  const [file, setFile] = useState<File | null>(null);
  console.log(file);

  const handleUpload = () => {
    // Upload logic here
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: '100%',
          maxWidth: 900,
          backgroundColor: '#f9f9f9',
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: '#333', textAlign: 'center' }}
        >
          Upload the .CSV file
        </Typography>

        <form>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <TextField
              type="file"
              variant="outlined"
              inputProps={{ accept: '.csv' }}
              onChange={handleFileChange}
              sx={{ flex: 1, minWidth: 500 }} 
            />

            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
              sx={{
                whiteSpace: 'nowrap',
                height: '56px',
                paddingX: 5, 
              }}
            >
              Upload
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

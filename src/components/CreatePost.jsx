import React, { useState } from 'react';
import { Button, TextField, Card, CardContent } from '@mui/material';

const CreatePost = () => {
  const [text, setText] = useState('');

  return (
    <Card style={{ marginBottom: '20px' }}>
      <CardContent>
        <TextField
          label="What's on your mind?"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Post
        </Button>
      </CardContent>
    </Card>
  );
};

export default CreatePost;

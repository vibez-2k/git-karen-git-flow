import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';

const Post = ({ text }) => {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="body1">{text}</Typography>
        <div style={{ marginTop: '10px' }}>
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
          <IconButton>
            <CommentIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default Post;

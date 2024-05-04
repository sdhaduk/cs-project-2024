import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
  request: any;
};

export default function MediaCard({ request }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {request.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Date Posted: {request.createdAt.substring(0, 10)}</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>NonProfit: {request.authorEmail}</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {request.description}
        </Typography>
        {request.filled && (
          <Typography variant="body2" color="text.secondary">
            <b>Filled by: {request.donorEmail}</b>
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {!request.filled ? (
          <Button size="small" variant="outlined" color="error">
            Not Filled
          </Button>
        ) : (
          <Button size="small" variant="outlined" color="success">
            Filled
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

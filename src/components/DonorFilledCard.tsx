import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
      </CardContent>
    </Card>
  );
}

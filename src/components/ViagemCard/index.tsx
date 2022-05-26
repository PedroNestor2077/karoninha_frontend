import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AiFillCar } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: "70%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <AiFillCar />
          </Avatar>
        }
        action={
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginLeft: "20px" }}
          >
            <b>Pedro Nestor</b>
          </Typography>
        }
        title="Pratapolis a Franca"
        subheader="04/02/2022"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a per
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginLeft: "20px" }}
        >
          Vagas: 5
        </Typography>
        <IconButton>
          <a
            href="https://api.whatsapp.com/send?phone=35997412678"
            target="_blank"
          >
            <BsWhatsapp color="green" />
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
}

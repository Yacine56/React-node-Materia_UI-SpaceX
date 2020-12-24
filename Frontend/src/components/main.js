import React, { useEffect, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useStyle } from "./css/main-css";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { context } from "../context/context";

const Main = () => {
  const classes = useStyle();
  const [data, setData] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useContext(context);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        setData(response.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const cardClick = (id) => {
    history.push(`/${id}`);
  };

  let content = loading ? (
    <CircularProgress size="120px" style={{ color: "white" }} />
  ) : (
    data.map((index) => {
      if (index.links.flickr_images.length > 1) {
        return (
          <Grid
            key={index.flight_number}
            item
            container
            className={classes.card}
            direction="row"
            onClick={() => {
              cardClick(index.flight_number);
            }}
          >
            <Grid
              item
              container
              direction="column"
              md
              className={classes.first}
            >
              <Typography className={classes.titles}>
                flight_number :{" "}
              </Typography>
              <Typography className={classes.text}>
                {index.flight_number}
              </Typography>
              <Typography className={classes.titles}>mission_name: </Typography>
              <Typography className={classes.text}>
                {index.mission_name}{" "}
              </Typography>
              <Typography className={classes.titles}>site name: </Typography>
              <Typography className={classes.text}>
                {index.launch_site.site_name_long}{" "}
              </Typography>
              {index.details && (
                <Typography className={classes.titles}>
                  mission_details:{" "}
                </Typography>
              )}
              {index.details && (
                <Typography className={classes.text}>
                  {index.details}{" "}
                </Typography>
              )}
            </Grid>
            <Grid item md>
              <img
                src={index.links.flickr_images[1]}
                alt=""
                style={{ width: "100%", height: "300px" }}
              />
            </Grid>
          </Grid>
        );
      } else {
        return null;
      }
    })
  );

  return content;
};

export default Main;

import React, { useState } from 'react'
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'

const useStyles = makeStyles(styles, {
  table: {
    minWidth: 650,
  },
});

const useStylesCard = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const useStylesGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


const SectionBlog = ({blogData}) => {
  const classes = useStyles();
  const classesCard = useStylesCard();
  const classesGrid = useStylesGrid();

  return (
      <div  className={classes.sections}>
          <div className={classes.container}>
          <div className={classes.title}>
              <div style={{float:'left'}}>
              <h2 className="title">Blogs </h2>
              </div>
          </div>
          <Grid container className={classesGrid.root} spacing={2}>
            {blogData.map(post => (
              <Grid item xs={12} sm={3} key={post.id} >
                <Link href="/blogs/[id]" as={`/blogs/${post.id}`} >
              <Card className={classesCard.root} style={{height: 400}}>
                <CardActionArea>
                  <CardMedia
                    className={classesCard.media}
                    image={post.image}
                    title={post.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {post.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
              </Link>
              </Grid>
              ))}
          </Grid>
          </div>
      </div>
  );

}
export default SectionBlog
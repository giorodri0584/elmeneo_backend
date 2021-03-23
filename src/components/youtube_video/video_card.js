import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const VideoCard = ({video}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [title] = useState('El Alfa \"El Jefe\" - Mera Woo (Video Oficial)');

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={video.videoImageUrl}
                title="Paella dish"
            />
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar} src={video.channelImageUrl}>
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={title}
                subheader={video.channelTitle}
            />
        </Card>
    );
}

export default VideoCard;
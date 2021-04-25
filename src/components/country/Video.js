import React from 'react';
import ReactPlayer from 'react-player';
import {useSelector} from 'react-redux';
import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      position: 'relative',
      width: '100%',
      // paddingTop: '56.25%', /* Player ratio: 100 / (1280 / 720) */
    },
    reactPlayer: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  }),
);

const Video = () => {
  const classes = useStyles();
  const videoUrl = useSelector((state) => state.country.country.videoUrl);
  return (
    <div className={classes.wrapper}>
      <ReactPlayer
        playing={false}
        className='react-player'
        url={videoUrl}
        width='100%'
        height='100%'
        controls
      />
    </div>
  );
};

export default Video;

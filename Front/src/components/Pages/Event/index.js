import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ProfilTest from 'src/assets/images/profiltest.png';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { Avatar } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import './events.scss';

const Event = ({
  name,
  id,
  events,
  setRedirectOff,
  topic,
  sendTopic,
  setSubmit,
  setId,
}) => {
  useEffect(() => {
    setRedirectOff();
  }, []);
  const handleTopic = (evt) => {
    const { value } = evt.currentTarget;
    sendTopic(value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSubmit();
  };
  const sendId = (eventId) => {
    console.log(eventId);
    setId(eventId);
  };
  return (
    <div className="tech">
      <div className="tech-box">
        <h1 className="tech-title">{name}</h1>
        <div className="tech-cards">
          {events.map((event) => (
            <Card key={event.id} className="tech-card">
              <CardActionArea className="tech-card-center">
                <Avatar className="profile-avatar" src={`${process.env.REACT_APP_BASE_URL}avatars/${event.owner.avatar}`} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {event.owner.lastname} {event.owner.firstname}
                  </Typography>
                  <Typography className="tech-date" variant="body2" color="textSecondary" component="p">
                    {moment(event.date).format('YYYY-MM-DD HH:mm:ss')}
                  </Typography>
                  <Typography className="tech-limit" variant="body2" color="textSecondary" component="p">
                    Max étudiant(s): {event.studentLimit}
                  </Typography>
                  <Typography className="tech-description" variant="body2" color="textSecondary" component="p">
                    Description: {event.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="tech-action">
                <form method="POST" className="tech-form" onSubmit={handleSubmit}>
                  <TextField
                    className="formInput"
                    aria-label="Je choisi mon sujet"
                    label="Je choisi mon sujet"
                    value={topic[event.id + 50]}
                    onFocus={() => {
                      sendId(event.id);
                    }}
                    onChange={handleTopic}
                  />
                  <Button type="submit" className="tech-button" size="small" variant="contained" color="primary">
                    S'inscrire au cours !
                  </Button>
                </form>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  topic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setId: PropTypes.func.isRequired,
  sendTopic: PropTypes.func.isRequired,
  setSubmit: PropTypes.func.isRequired,
  setRedirectOff: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      owner: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        firstname: PropTypes.string.isRequired,
        promo: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};
export default Event;
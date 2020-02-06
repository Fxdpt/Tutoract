import React from 'react';
import Card from '@material-ui/core/Card';
import DateTimePicker from 'react-datetime-picker';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import moment from 'moment';
import PropTypes from 'prop-types';
import './MyCreatedEvents.scss';

const MyCreatedEvents = ({
  toggleMySettings,
  isOpen,
  eventsOwned,
  setForm,
  isDisplay,
  topic,
  setTopic,
  setCreatedDate,
  changeDate,
  setId,
  sendUpdatedSubmit,
  sendSubmit,
  sendInfos,
  getContent,
}) => {
  const setToggle = () => {
    toggleMySettings();
  };
  const displayForm = () => {
    setForm();
  };
  const changeInput = (evt) => {
    const { value } = evt.target;
    setTopic(value);
  };
  const changeNewDate = (value) => {
    const newDate = new Date(value);
    setCreatedDate(newDate);
  };
  const sendId = (EventId) => {
    console.log(EventId);
    setId(EventId);
  };
  const handleOnClick = (eventId, techName) => {
    console.log(eventId, techName);
    sendInfos(eventId, techName);
    getContent();
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('je suis le submit');
    sendUpdatedSubmit();
  };
  const handleJoinSubmit = (evt) => {
    evt.preventDefault();
    console.log('je suis latu');
    sendSubmit();
  };
  return (
    <div className="created">
      <FormControlLabel
        className="created-label"
        control={<Switch checked={isOpen} onChange={setToggle} />}
        label="Mes Evenement(s) Crée(s)"
      />
      <div className="created-collapse">
        <Collapse in={isOpen}>
          <div className="created-box">
            <h1 className="created-toggle">Mes évènements crées</h1>
            <Button className="created-button" size="small" variant="contained" color="primary" onClick={displayForm}>
              Modifier le sujet
            </Button>
            <div className="created-cards">
              {eventsOwned.map((event) => (
                <Card key={event.id} className="created-card">
                  <form onSubmit={handleJoinSubmit}>
                    <CardActionArea className="created-card-center" type="submit" onClick={() => { handleOnClick(event.id, event.tech.name) }}>
                      <CardContent>
                        <Typography className="created-title" gutterBottom variant="h5" component="h2">
                          {event.tech.name}
                        </Typography>
                        <Typography className="created-date" variant="body2" color="textSecondary" component="h3">
                          Date: {moment(event.date).format('YYYY-MM-DD HH:mm:ss')}
                        </Typography>
                        <Typography className="created-description" variant="body2" color="textSecondary" component="h3">
                          Description: {event.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </form>
                  {isDisplay && (
                    <>
                      <form method="POST" className="created-form" onSubmit={handleSubmit}>
                        <TextField className="created-input" aria-label="Modification du Sujet" label="Modification du Sujet" value={topic[event.id + 50]} onChange={changeInput} onFocus={() => {sendId(event.id)}} />
                        <DateTimePicker onChange={changeNewDate} value={changeDate} onFocus={() => {sendId(event.id)}} />
                        <Button type="submit" className="created-button" size="small" variant="contained" color="primary">
                        Valider les modifications
                        </Button>
                      </form>
                    </>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};
MyCreatedEvents.propTypes = {
  getContent: PropTypes.func.isRequired,
  sendInfos: PropTypes.func.isRequired,
  sendSubmit: PropTypes.func.isRequired,
  topic: PropTypes.string.isRequired,
  sendUpdatedSubmit: PropTypes.func.isRequired,
  setId: PropTypes.func.isRequired,
  setTopic: PropTypes.func.isRequired,
  changeDate: PropTypes.string.isRequired,
  setCreatedDate: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired,
  isDisplay: PropTypes.bool.isRequired,
  toggleMySettings: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  eventsOwned: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tech: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};
export default MyCreatedEvents;

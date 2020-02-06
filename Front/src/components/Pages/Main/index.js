/* eslint-disable brace-style */
/* eslint-disable block-spacing */
import React, { useEffect } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import homepage from 'src/assets/images/homepage.png';
import './main.scss';


const Main = ({ isLogged, getEventTech, getTechs, techs, sendTechId, getUserInfos }) => {
  useEffect(() => {
    const getItem = window.localStorage.getItem('token');
    if (getItem !== null) {
      getUserInfos();
      getTechs();
    }
  }, []);
  const handleClick = (techId, techName) => {
    sendTechId(techId, techName);
    getEventTech();
  };
  return (
    <>
      {!isLogged && (
      <div className="main-visitor">
        <h1 className="main-visitor-title">Tutoract</h1>
        <p className="main-visitor-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint quaerat fugit praesentium autem sed, molestiae provident, necessitatibus, dolorum similique aspernatur? Suscipit repudiandae, error voluptate ad ratione est voluptatum temporibus provident molestiae maxime debitis, quos nobis! Eius voluptatem cum reiciendis, fugiat enim sequi error eum ratione pariatur aut adipisci, sapiente magni libero voluptas laborum eos quasi eveniet earum ut et dolores modi minima iusto unde? Veritatis soluta qui in accusamus?</p>
        <img className="main-visitor-img" src="https://cdn.pixabay.com/photo/2016/11/30/20/44/computer-1873831_960_720.png" alt="computer" />
      </div>
      )}
      {isLogged && (
        <div className="main-logged">
          <img className="main-logged-homepage" alt="homepage" src={homepage} />
          <p className="main-logged-paragraph">J'ai besoin d'aide en...</p>
          {techs.map((tech) => (
            <ExpansionPanel key={tech.id} className="main-logged-accordeon">
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="main-logged-arrow"
              >
                <Typography className="main-logged-title">{tech.name}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="main-logged-expansion">
                <Typography className="main-logged-description">
                  {tech.description}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => {handleClick(tech.id, tech.name);}}>Voir les cours</Button>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </div>
      )}
    </>
  );
};

Main.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  getEventTech: PropTypes.func.isRequired,
  getTechs: PropTypes.func.isRequired,
  sendTechId: PropTypes.func.isRequired,
  techs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Main;

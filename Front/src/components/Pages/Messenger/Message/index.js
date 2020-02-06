import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../messenger.scss';

const Message = ({ userId, messageData, getContent }) => {
  useEffect(() => {
    getContent();
  });
  return (
    <div className="messenger-scroll">
      {messageData.map((message) => (
        <div key={message.id} className={classNames('messenger-message', { 'messenger-message-own': userId === message.user.id })}>
          <p className="messenger-message-user">{message.user.firstname}</p>
          <p className="messenger-message-single">{message.content}</p>
        </div>
      ))}
    </div>
  );
};

Message.propTypes = {
  getContent: PropTypes.func.isRequired,
  eventId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  messageData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.isRequired,
      user: PropTypes.shape({
        firstname: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Message;

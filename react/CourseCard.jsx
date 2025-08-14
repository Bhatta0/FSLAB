import React, { Component } from 'react';
import PropTypes from 'prop-types';
//npm install prop-types
class CourseCard extends Component {
  render() {
    const { title, duration, name } = this.props;
    return (
      <>
        <p>
          <b>Title:</b>{title} <br />
          <b>Duration:</b>{duration} <br />
          <b>Name:</b>{name}
        </p>
      </>
    );
  }
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default CourseCard;




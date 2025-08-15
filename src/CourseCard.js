import React, { Component } from "react";
import PropTypes from "prop-types";

class CourseCard extends Component {
  render() {
    const { title, duration, instructor } = this.props;
    return (
      <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
        <h2>{title}</h2>
        <p>Duration: {duration} weeks</p>
        <p>Instructor: {instructor}</p>
      </div>
    );
  }
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  instructor: PropTypes.string.isRequired
};

export default CourseCard;

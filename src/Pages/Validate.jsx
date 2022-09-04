import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

export const Validate = (props) => {
  return <div>Validate</div>;
};

Validate.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Validate);

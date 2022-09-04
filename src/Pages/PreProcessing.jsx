import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

export const PreProcessing = (props) => {
  return <div>PreProcessing</div>;
};

PreProcessing.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PreProcessing);

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

export const SummaryDetails = (props) => {
  const { jsonData } = props;
  return (
    <div>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

SummaryDetails.propTypes = {
  details: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SummaryDetails);

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import {
  TextField,
  Container,
  Select,
  MenuItem,
  InputLabel,
  Divider,
} from "@mui/material";
import { StyledDiv } from "../styleSheet";

export const ViolationConfiguration = (props) => {
  const [option, setOption] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOption(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Container maxWidth="xl" style={{ margin: "5px", padding: "5px" }}>
      <StyledDiv gap="10px" />
      <TextField
        style={{ width: "100%" }}
        label="Input Field"
        variant="outlined"
      />
      <StyledDiv gap="10px" />
      <InputLabel>Multi Select</InputLabel>
      <Select
        multiple
        style={{ width: "100%" }}
        value={option}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </Select>
      <StyledDiv gap="10px" />
      <TextField
        multiline
        maxRows={4}
        style={{ width: "100%" }}
        label="Multiline"
      />
      <StyledDiv gap="10px" />
      <Divider />
      <StyledDiv gap="10px" />
    </Container>
  );
};

ViolationConfiguration.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViolationConfiguration);

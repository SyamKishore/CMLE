import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Stack, Typography, Grid, Card } from "@mui/material";
import { IOSSwitch, ConfigBox, StyledContainerBox } from "../styleSheet";
import {
  MetricsConfiguration,
  DriftConfiguration,
  ViolationConfiguration,
  BiasConfiguration,
  SummaryDetails,
} from "./applciation_index";
import { setConfigModuleActive } from "../Store/taskActions";

export const Configuration = (props) => {
  const {
    MetricsConfigStatus,
    setConfigModuleActive,
    DriftConfigurationStatus,
    ViolationConfigurationStatus,
    BiasConfigurationStatus,
    details,
  } = props;
  const handleClick = (moduleName) => {
    setConfigModuleActive(moduleName);
  };
  return (
    <div style={{ margin: "10px" }}>
      <Grid container>
        <Grid item xs={6}>
          <StyledContainerBox componentHeight={"88vh"}>
            {/* Metrics Configuration Module */}
            <div style={{ width: "95%" }}>
              <ConfigBox onClick={(e) => handleClick("MetricsConfigStatus")}>
                <Stack direction="row">
                  <Typography
                    variant="h5"
                    style={{ fontFamily: "Acme", margin: "5px" }}
                  >
                    Metrics
                  </Typography>
                  <div style={{ marginLeft: "auto", marginRight: 0 }}>
                    <IOSSwitch checked={MetricsConfigStatus} />
                  </div>
                </Stack>
              </ConfigBox>
              {MetricsConfigStatus ? <MetricsConfiguration /> : <div />}
            </div>
            {/* Drift Configuration Module */}
            <div style={{ width: "95%" }}>
              <ConfigBox
                onClick={(e) => handleClick("DriftConfigurationStatus")}
              >
                <Stack direction="row">
                  <Typography
                    variant="h5"
                    style={{ fontFamily: "Acme", margin: "5px" }}
                  >
                    Drifts
                  </Typography>
                  <div style={{ marginLeft: "auto", marginRight: 0 }}>
                    <IOSSwitch checked={DriftConfigurationStatus} />
                  </div>
                </Stack>
              </ConfigBox>
              {DriftConfigurationStatus ? <DriftConfiguration /> : <div />}
            </div>
            {/* Violation Configuration Module */}
            <div style={{ width: "95%" }}>
              <ConfigBox
                onClick={(e) => handleClick("ViolationConfigurationStatus")}
              >
                <Stack direction="row">
                  <Typography
                    variant="h5"
                    style={{ fontFamily: "Acme", margin: "5px" }}
                  >
                    Metrics
                  </Typography>
                  <div style={{ marginLeft: "auto", marginRight: 0 }}>
                    <IOSSwitch checked={ViolationConfigurationStatus} />
                  </div>
                </Stack>
              </ConfigBox>
              {ViolationConfigurationStatus ? (
                <ViolationConfiguration />
              ) : (
                <div />
              )}
            </div>
            {/* Bias Configuration Module */}
            <div style={{ width: "95%" }}>
              <ConfigBox
                onClick={(e) => handleClick("BiasConfigurationStatus")}
              >
                <Stack direction="row">
                  <Typography
                    variant="h5"
                    style={{ fontFamily: "Acme", margin: "5px" }}
                  >
                    Bias
                  </Typography>
                  <div style={{ marginLeft: "auto", marginRight: 0 }}>
                    <IOSSwitch checked={BiasConfigurationStatus} />
                  </div>
                </Stack>
              </ConfigBox>
              {BiasConfigurationStatus ? <BiasConfiguration /> : <div />}
            </div>
          </StyledContainerBox>
        </Grid>
        <Grid item xs={6}>
          <Card style={{ height: "88vh", overflow: "auto" }}>
            <SummaryDetails jsonData={details} />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

Configuration.propTypes = {};

const mapStateToProps = (state) => ({
  MetricsConfigStatus: state.MetricsConfigStatus,
  DriftConfigurationStatus: state.DriftConfigurationStatus,
  ViolationConfigurationStatus: state.ViolationConfigurationStatus,
  BiasConfigurationStatus: state.BiasConfigurationStatus,
  details: state.details,
});

const mapDispatchToProps = {
  setConfigModuleActive: setConfigModuleActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);

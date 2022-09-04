import { StyledAppBar, HeaderTitle, StyledContainerBox } from "../styleSheet";
import { Toolbar, Container, Box, Tabs, Tab } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setActiveTab } from "../Store/taskActions";

const Application = (props) => {
  const { navItems, activeTab, setActiveTab } = props;

  const navigate = useNavigate();
  const handleClick = (navigateTo, tabName) => {
    navigate(navigateTo);
    setActiveTab(tabName);
  };

  const handleChange = (event, tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <StyledAppBar position="fixed" elevation={0}>
        <Toolbar>
          <HeaderTitle
            style={{ cursor: "pointer", color: "black" }}
            onClick={(e) => handleClick("/configuration", "configuration")}
          >
            CMLE Monitoring Toolkit
          </HeaderTitle>
          <Box style={{ marginLeft: "auto", marginRight: 0 }}>
            <Tabs value={activeTab} onChange={handleChange}>
              {navItems.map((item, index) => (
                <Tab
                  onClick={(e) => handleClick(item.link, item.name)}
                  key={index}
                  sx={{
                    fontSize: 15,
                    color: "#000",
                    textTransform: "none",
                    fontFamily: "Acme",
                  }}
                  value={item.name}
                  label={item.label}
                />
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <div style={{ marginTop: "9vh" }} />
      <StyledContainerBox componentHeight="90.2vh">
        <Outlet />
      </StyledContainerBox>
    </div>
  );
};

Application.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
  navItems: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  navItems: state.navItems,
  activeTab: state.activeTab,
});

const mapDispatchToProps = {
  setActiveTab: setActiveTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);

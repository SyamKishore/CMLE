import { Box, Card, styled, Switch } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import "./app.css";

export const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#DFF6FF",
}));

export const StyledDiv = styled("div")(({ theme, gap }) => ({
  margin: gap,
}));

export const HeaderTitle = styled("h1")(({}) => ({
  fontFamily: "Roboto Slab",
  fontSize: 30,
  fontWeight: "bold",
  color: "white",
}));

export const StyledContainerBox = styled(Card)(
  ({ theme, componentHeight }) => ({
    marginLeft: "2vw",
    marginRight: "2vw",
    height: componentHeight,
    borderBottom: "none",
    overflow: "auto",
    borderRadius: "7px",
  })
);

export const ConfigBox = styled(Box)(({ theme }) => ({
  height: "5vh",
  width: "100%",
  margin: "5px",
  border: "1px solid black",
  borderRadius: "10px",
  cursor: "pointer",
}));

export const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  margin: "10px",
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

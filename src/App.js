import {
  Configuration,
  Application,
  PreProcessing,
  Validate,
} from "./Pages/applciation_index";
import { connect } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import "./app.css";
import { useEffect } from "react";
import { setActiveTab } from "./Store/taskActions";

function App(props) {
  const { setActiveTab } = props;
  const location = useLocation();
  let path = location.pathname;
  useEffect(() => {
    setActiveTab(path.replace("/", ""));
    document.body.style.background = "#DFF6FF";
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Application />}>
          <Route index element={<Configuration />} />
          <Route path="configuration" element={<Configuration />} />
          <Route path="pre-processing" element={<PreProcessing />} />
          <Route path="validate" element={<Validate />} />
        </Route>
      </Routes>
    </div>
  );
}

Configuration.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setActiveTab: setActiveTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

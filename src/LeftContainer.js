import React from "react";
import "./LeftContainer.css";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import LeftContainerOption from "./LeftContainerOption";
import HomeIcon from "@material-ui/icons/Home";
import ForumIcon from "@material-ui/icons/Forum";
import TimerIcon from "@material-ui/icons/Timer";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function LeftContainer() {
  return (
    <div className="leftContainer">
      <div className="leftContainer__heading">
        <GroupWorkIcon />
        Exxmon<span>.</span>
      </div>
      <div className="leftContainer__subContainer">
        <LeftContainerOption
          title="Menu"
          className="leftContainer__subheading"
        />
        <LeftContainerOption title="Home" Icon={HomeIcon} />
        <LeftContainerOption title="Community" Icon={ForumIcon} />
        <LeftContainerOption title="Discovery" Icon={SearchIcon} />
        <LeftContainerOption title="Coming soon" Icon={TimerIcon} />
      </div>
      <div className="leftContainer__subContainer">
        <LeftContainerOption
          title="Social"
          className="leftContainer__subheading"
        />
        <LeftContainerOption title="Friends" Icon={PersonIcon} />
        <LeftContainerOption title="Parties" Icon={GroupIcon} />
        <LeftContainerOption title="Media" Icon={PermMediaIcon} />
      </div>
      <div className="leftContainer__subContainer">
        <LeftContainerOption
          title="General"
          className="leftContainer__subHeading"
        />
        <LeftContainerOption title="Setting" Icon={SettingsIcon} />
        <LeftContainerOption title="Log Out" Icon={ExitToAppIcon} />
      </div>
    </div>
  );
}

export default LeftContainer;

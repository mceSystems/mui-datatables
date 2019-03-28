import React from "react";
import IconButton from "@mcesystems/material-ui-core/IconButton";
import Tooltip from "@mcesystems/material-ui-core/Tooltip";
import AddIcon from "@mcesystems/material-ui-icons/Add";
import { withStyles } from "@mcesystems/material-ui-core/styles";

const defaultToolbarStyles = {
  iconButton: {
  },
};

class CustomToolbar extends React.Component {
  
  handleClick = () => {
    console.log("clicked on icon!");
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Tooltip title={"custom icon"}>
          <IconButton className={classes.iconButton} onClick={this.handleClick}>
            <AddIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
      </React.Fragment>
    );
  }

}

export default withStyles(defaultToolbarStyles, { name: "CustomToolbar" })(CustomToolbar);

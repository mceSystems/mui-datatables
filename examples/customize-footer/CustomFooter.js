import React from "react";
import TableFooter from "@mcesystems/material-ui-core/TableFooter";
import TableRow from "@mcesystems/material-ui-core/TableRow";
import TableCell from "@mcesystems/material-ui-core/TableCell";
import { withStyles } from "@mcesystems/material-ui-core/styles";

const defaultFooterStyles = {
};

class CustomFooter extends React.Component {

  render() {
    const { classes } = this.props;

    return (
    <TableFooter>
      <TableRow>
        <TableCell>
          some content
        </TableCell>
      </TableRow>
    </TableFooter>
    );
  }

}

export default withStyles(defaultFooterStyles, { name: "CustomFooter" })(CustomFooter);

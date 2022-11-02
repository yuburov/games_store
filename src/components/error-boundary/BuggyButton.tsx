/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from "react";
import Button from "@mui/material/Button";

interface Props {
  children?: ReactNode;
}

interface State {
  releaseBugs: boolean;
}

class BuggyButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      releaseBugs: false,
    };
  }

  handleClick = () => {
    this.setState({
      releaseBugs: true,
    });
  };

  render() {
    if (this.state.releaseBugs) {
      throw new Error("I crashed!");
    }

    return (
      <Button variant="outlined" onClick={this.handleClick} color="error">
        Scary Button!
      </Button>
    );
  }
}

export default BuggyButton;

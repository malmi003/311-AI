import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  tabsIndicator: {
    backgroundColor: '#FFFFFF',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 144,
    minHeight: '5vh',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#E8E8E8',
      // opacity: 1,
    },
    '&$tabSelected': {
      color: '#FFFFFF',
      // fontWeight: theme.typography.fontWeightMedium,
    },
    // '&:focus': {
    //   color: '#40a9ff',
    // },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class CustomizedTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="311 AI "
          />
          <Tab
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="My Docs"
          />
          <Tab
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Profile"
          />
        </Tabs>
      </div>
    );
  }
}

CustomizedTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTabs);

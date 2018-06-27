import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';
import MDCTextField from 'material-ui/textfield';
import AppBar from 'material-ui/AppBar';

function handleClick() {
  alert('hello! you have clicked the button');
}

const MyAwesomeReactComponent = () => (
  <RaisedButton
    label="Click Me"
    onClick = {handleClick}/>
  // <AppBar
  //   title="Click me!"
  //   onTitleClick={handleClick}
  //   iconClassNameRight="muidocs-icon-navigation-expand-more"
  // />
);

export default MyAwesomeReactComponent;

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';
import MDCTextField from 'material-ui/textfield';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

function handleClick() {
  alert('hello! you have clicked the button');
}


const MyAwesomeReactComponent = () => (
<div>
    <RaisedButton
       backgroundColor="#00c639"
        icon={<ActionAndroid />}
        href = "https://www.android.com/"
      />
&nbsp;&nbsp;
    <RaisedButton
      label = "Angela's Github"
      href="https://github.com/asun1234"
      target="_blank"
      primary={true}
    />

  </div>
);

export default MyAwesomeReactComponent;

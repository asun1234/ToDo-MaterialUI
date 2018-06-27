// import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import Menu from 'material-ui/Menu';
// import MenuItem from 'material-ui/MenuItem';
//
// class MoreStuff extends React.Component {
//   state = {
//     anchorel: null,
//   };
//
//   handleClick = event => {
//     this.setState({ anchorel: event.currentTarget });
//   };
//
//   handleClose = () => {
//     this.setState({ anchorel: null });
//   };
//
//   render() {
//     const { anchorel } = this.state;
//
//     return (
//       <div>
//         <FlatButton
//           aria-owns={anchorel ? 'simple-menu' : null}
//           aria-haspopup="true"
//           onClick={this.handleClick}
//         >
//           Open Menu
//         </FlatButton>
//         <Menu
//           id="simple-menu"
//           anchorel={anchorel}
//           open={Boolean(anchorel)}
//           onClose={this.handleClose}
//         >
//           <MenuItem onClick={this.handleClose}>Item 1</MenuItem>
//           <MenuItem onClick={this.handleClose}>Item 2</MenuItem>
//           <MenuItem onClick={this.handleClose}>Item 3</MenuItem>
//         </Menu>
//       </div>
//     );
//   }
// }
//
// export default MoreStuff;

import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
//import ActionAndroid from 'material-ui/MoreVert';
import ActionAndroid from 'material-ui/svg-icons/action/android';
const options = [
  'Item 1',
  'Item 2',
  'Item 3'
];

const ITEM_HEIGHT = 20;

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onClick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

class MoreStuff extends React.Component {

  state = {
    anchorel: null,
  };

  handleClick = event => {
    this.setState({ anchorel: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorel: null });
  };

  render() {
    const { anchorel } = this.state;

    return (
    <div className="dropdown">
  <button onClick= {'myFunction()'} className="dropbtn">Dropdown</button>
  <div id="myDropdown" className="dropdown-content">
    <MenuItem onClick={this.handleClose}>Item 1</MenuItem>
    <MenuItem onClick={this.handleClose}>Item 2</MenuItem>
    <MenuItem onClick={this.handleClose}>Item 3</MenuItem>
  </div>
</div>
      // <div>
      //   <IconButton
      //     aria-label="More"
      //     aria-owns={anchorel ? 'menu' : null}
      //     aria-haspopup="false"
      //     onClick={this.handleClick}
      //   >
      //     <ActionAndroid />
      //   </IconButton>
      //   <Menu
      //     id="menu"
      //     anchorel={anchorel}
      //     open={Boolean(anchorel)}
      //     onClose={this.handleClose}
      //     paperprops={{
      //       style: {
      //         maxHeight: ITEM_HEIGHT * 2,
      //         width: 50,
      //       },
      //     }}
      //   >
      //     {options.map(option => (
      //       <MenuItem key={option} selected={option === 'Pyxis'}
      //         onClick={this.handleClose}>
      //         {option}
      //       </MenuItem>
      //     ))}
      //   </Menu>
      // </div>
    );
  }
}

export default MoreStuff;

import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <ListItem button component={Link} to="/manage-students">
          <ListItemIcon className="sidebar-icon">
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Students" />
        </ListItem>
        <ListItem button component={Link} to="/head-boy">
          <ListItemIcon className="sidebar-icon">
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Head Boy" />
        </ListItem>
        <ListItem button component={Link} to="/head-girl">
          <ListItemIcon className="sidebar-icon">
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Head Girl" />
        </ListItem>
        <Divider />
        {/* <ListItem button component={Link} to="/home">
          <ListItemIcon className="sidebar-icon">
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemIcon className="sidebar-icon">
            <BallotIcon />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem> */}
      </List>
    </div>
  );
};

export default Sidebar;

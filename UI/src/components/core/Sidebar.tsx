import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';
import LocalFloristIcon  from '@mui/icons-material/LocalFlorist';
import PaletteIcon from '@mui/icons-material/Palette';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <Divider />
        <ListItem button component={Link} to="/school-election/manage-students">
          <ListItemIcon className="sidebar-icon">
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Students" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/school-election/head-boy">
          <ListItemIcon className="sidebar-icon">
            <BoyIcon />
          </ListItemIcon>
          <ListItemText primary="Head Boy" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/school-election/head-girl">
          <ListItemIcon className="sidebar-icon">
            <GirlIcon />
          </ListItemIcon>
          <ListItemText primary="Head Girl" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/school-election/sports">
          <ListItemIcon className="sidebar-icon">
            <SportsSoccerIcon />
          </ListItemIcon>
          <ListItemText primary="Sports" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/school-election/culture">
          <ListItemIcon className="sidebar-icon">
            <PaletteIcon />
          </ListItemIcon>
          <ListItemText primary="Cultural Secretary" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/school-election/tulip">
          <ListItemIcon className="sidebar-icon">
            <LocalFloristIcon />
          </ListItemIcon>
          <ListItemText primary="Tulip" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/school-election/iris">
          <ListItemIcon className="sidebar-icon">
            <LocalFloristIcon />
          </ListItemIcon>
          <ListItemText primary="Iris" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/school-election/orchid">
          <ListItemIcon className="sidebar-icon">
            <LocalFloristIcon />
          </ListItemIcon>
          <ListItemText primary="Orchid" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/school-election/daffodils">
          <ListItemIcon className="sidebar-icon">
            <LocalFloristIcon />
          </ListItemIcon>
          <ListItemText primary="Daffodils" />
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

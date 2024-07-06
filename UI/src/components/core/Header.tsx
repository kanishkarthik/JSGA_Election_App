import { Box, Typography, Avatar, Link } from '@mui/material';
import schoolLogo from '../../assets/images/logo.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const onHandleNavigation = () => {
    navigate('/school-election/');
  }
  return (
    <Box
      component="header"
      display="flex"
      alignItems="center"
      justifyContent="center"
      className="header"
      p={2}
      color="white"
      position="relative"
    >
      <Box position="absolute" left={16}>
        <Avatar component={Link} onClick={onHandleNavigation}
          src={schoolLogo}
          alt="JS GLOBAL ACADEMY : Student Council Election"
          sx={{ width: 100, height: 100, marginTop: 3.5, cursor: 'pointer' }}

        />
      </Box>
      <Typography variant="h4">
        JS GLOBAL ACADEMY <Typography component="span" variant="subtitle1">(A Senior Secondary School)</Typography>, Kallakurichi
      </Typography>
    </Box>
  );
};

export default Header;

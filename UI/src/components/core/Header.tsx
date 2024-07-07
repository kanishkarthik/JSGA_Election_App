import { Box, Typography, Avatar } from '@mui/material';
import schoolLogo from '../../assets/images/logo.jpg';

const Header = () => {
  return (
    <Box
      component="header"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={2}
      color="white"
      className='header'
    >
      <Box position="absolute" left={65}>
        <Avatar
          src={schoolLogo}
          alt="JS GLOBAL ACADEMY : Student Council Election"
          sx={{ width: 150, height: 150 }}
        />
      </Box>
      <Box textAlign="center">
        <Typography variant="h4">
          JS GLOBAL ACADEMY
        </Typography>
        <Typography variant="subtitle1">
          A SENIOR SECONDARY SCHOOL
        </Typography>
        <Typography variant="h5">
          Affiliated to CBSE, New Delhi. Affiliation No: 1931299
        </Typography>
        <Typography variant="h5">
          Kallakurichi District - 606 202.
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;

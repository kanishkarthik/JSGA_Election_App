import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: '#164895',
          color: 'white',
          padding: '10px',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} JS GLOBAL ACADEMY. All rights reserved. Application Build by <strong>Kanish Karthik</strong> Dad.
        </Typography>
      </Box>
      <footer className="footer">
        <p>© {new Date().getFullYear()} JS GLOBAL ACADEMY. All rights reserved.</p>
        <p>Application Build by <strong>Kanish Karthik</strong> Dad</p>
      </footer>
    </>
  );
};

export default Footer;

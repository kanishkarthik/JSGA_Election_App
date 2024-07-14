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
          &copy; {new Date().getFullYear()} JS GLOBAL ACADEMY. All rights reserved.The application was built by <strong>Kumaresan Govindan</strong>, father of <strong>Kanish Karthik</strong>.
        </Typography>
      </Box>
      <footer className="footer">
        <p>© {new Date().getFullYear()} JS GLOBAL ACADEMY. All rights reserved.</p>
        <p>The application was built by <strong>Kumaresan Govindan</strong>, father of <strong>Kanish Karthik</strong>.</p>
      </footer>
    </>
  );
};

// const Footer = () => {
//   return (
//       <Box
//           component="footer"
//           sx={{
//               py: 2,
//               px: 2,
//               mt: 'auto',
//               backgroundColor: 'primary.main',
//               color: 'white',
//               textAlign: 'center',
//           }}
//       >
//           <Container maxWidth="lg">
//               <Typography variant="body2" component="p">
//                   © {new Date().getFullYear()} JS GLOBAL ACADEMY. All rights reserved.
//               </Typography>
//               <Typography variant="body2" component="p">
//                   Application Built by <strong>Kanish Karthik</strong> Dad <small><strong>(Kumaresan Govindan)</strong></small>
//               </Typography>
//           </Container>
//       </Box>
//   );
// };

export default Footer;

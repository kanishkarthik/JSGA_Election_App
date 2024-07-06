import { Box, Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4} textAlign="center">
        <Typography variant="h2" gutterBottom>
          Our School
        </Typography>
        <Typography variant="h5" paragraph sx={{ fontWeight: 'bold' }}>
          JS Global: a Cambridge International school, is a school truly open to all.
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
          The school strives to be a globally recognized centre of educational excellence whose students consistently exceed expectations and are committed to addressing the needs. We provide a stimulating learning environment with comprehensive and modern amenities. Our campus is in a safe and secure setting, surrounded by green open spaces and outdoor recreational facilities.
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
          Our learning community is diverse where students of all nationalities, religions, and cultural backgrounds are welcomed and valued. We prepare them for the 21st century.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;

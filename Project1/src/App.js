import { Typography, AppBar,Card, CardActions, CardMedia, CardContent, Grid, CssBaseline, Toolbar,Container,Button, Box } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App=() =>{
  return (
    <>
    < CssBaseline/>
    <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6">
            PhotoAlbum
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{
        color: 'darkslategray',
        backgroundColor: 'background.paper',
        pt: 8,
            pb: 6,
      }}>
          <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Photo
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Box sx={{
            mt: 4,
          }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
              <Button variant="contained">Main call to action</Button>
             
              </Grid>
              <Grid item>
              <Button variant="outlined">Main call to action</Button>
             
              </Grid>
            </Grid>
          </Box>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4}>
               <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia component="div" sx={{pt: '56.25%',}}image="https://source.unsplash.com/random" title="Image title"/>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
             </Grid>
               ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{
        color: 'darkslategray',
        backgroundColor: 'background.paper',
       padding:'50px 0',
      }}>
         <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary"> Something here to give the footer a purpose!</Typography> 
      </Box>
    </>
  );
}

export default App;

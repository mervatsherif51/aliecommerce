import { KeyboardArrowUp } from '@mui/icons-material';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';


const ScrollToTop = () => {
  return (
  <Zoom in={useScrollTrigger({threshold: 100})}>
      <Fab onClick={() => { 
        window.scrollTo(500, 0);
       }} variant='circular' size="small" sx={{position: "fixed", bottom: 33, right: 33}} color="error" aria-label="arrow">
          <KeyboardArrowUp />
        </Fab>
  </Zoom>
  );
}

export default ScrollToTop;

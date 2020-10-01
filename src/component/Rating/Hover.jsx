import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './Hover.css';

const labels = {
  1: 'Useless',
  2: 'Useless+',
  3: 'Poor',
  4: 'Poor+',
  5: 'Ok',
  6: 'Ok+',
  7: 'Good',
  8: 'Good+',
  9: 'Excellent',
  10:'Excellent+',
};

const useStateWithLocalStorage = localStorageKey => {
  const [rating, setRating] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, rating);
  }, [rating]);
  return [rating, setRating];
};

const HoverRating = () => {
  
  const [rating, setRating] = useStateWithLocalStorage(null);
  const [hover, setHover] = useState(-1);
  console.log(`You rating: ${rating}`);

  return (
    <div className = 'tc rate'>
      <ol className='heading'>Please rate the app</ol>
        <Rating
          name="hover-feedback" 
          value={rating} 
          size="large" 
          max={10} 
          onChange={(event, newRating) => { setRating(newRating); }}
        />
        {
          rating !== null 
          && 
          <Box ml={2}>
            {labels[hover !== -1 ? hover : rating]}
          </Box>}
      <div className='rating'> {rating} / 10  </div>
    </div>
  );
}
export default HoverRating;

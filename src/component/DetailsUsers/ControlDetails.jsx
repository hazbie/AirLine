import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const ControlDetail = () => {
  const [answer, setAnswer] = useState('yes');
  const handleChange = event => {
    setAnswer(event.target.value);
    switch(answer) {}
  };
  console.log(`value is ${answer}`);

  return(
    <div>
      <ol className='heading'>Are correct your detail?</ol> 
      <FormControl >
        <RadioGroup value={answer} onChange={handleChange} >
          <FormControlLabel value="yes" control={<Radio color="default" />} label="Yes" />
          <FormControlLabel value="no" control={<Radio color="default" />} label="No" />
        </RadioGroup>
      </FormControl>       
      {answer==='yes' && <ol>Continue to next step</ol>}
      {answer==='no' && <ol>Please, rewrite your details on setp 1</ol>}
    </div>
  )
}
export default ControlDetail;

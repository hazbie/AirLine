import React, { useState } from 'react';
import FormReturn from './FormReturn/FormReturn';
import FormOneWay from './FormOneway/FormOneWay';
import './CheckIn.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom';

const ReturnAndOneWay = () => {
  const [value, setValue] = useState('return');
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [departure, setDeparture] = useState(null);
  const [returnTime, setRetur] = useState(null);
  const [cabine, setCabine] = useState(null);
  
  const handleChange = event => {
    setValue(event.target.value);
  };
  
  console.log('The state is: ', value);
  console.log(`the from value ${from}`);
  console.log(`the to value ${to}`);
  console.log(`the depart date ${departure}`);
  console.log(`the return date is ${returnTime}`);
  console.log(`the cabine is ${cabine}`);
  const url = `/search-one-way-flights${from ? `/from:${from}`: ''}${to ? `/to:${to}`: ''}${departure ? `/departure:${departure}`: ''}${cabine ? `/cabine:${cabine}`: ''}`;
  const url2 = `/search-return-flights${from ? `/from:${from}`: ''}${to ? `/to:${to}`: ''}${departure ? `/departure:${departure}`: ''}${returnTime ? `/returnTime:${returnTime}`: ''}${cabine ? `/cabine:${cabine}`: ''}`;
  const onFromChange = (from) => setFrom(from);
  const onToChange = (to) => setTo(to);
  const onDepartureChange = (departure) => setDeparture(departure);
  const onReturnChange = (returnTime) => setRetur(returnTime);
  const onCabineChange = (cabine) => setCabine(cabine);

  const onSetValue = (type, value) => {
    switch(type){
      case 'FromCountry': {
        onFromChange(value);
        break;
      }
      case 'ToCountry': {
        onToChange(value);
        break;
      }
      case 'Departure': {
        onDepartureChange(value);
        break;
      }
      case 'Return': {
        onReturnChange(value);
        break;
      }
      case 'Cabine': {
        onCabineChange(value);
        break;
      }
      default:
    }
  };

  return(
    <>     
      <form className='form br4 pa2 ma4 dib shadow-2'>
        <h2>What's your next destination ?</h2>
        <FormControl >
          <RadioGroup value={value} onChange={handleChange} >
            <FormControlLabel value="return" control={<Radio color="default" />} label="Return" />
          </RadioGroup>
        </FormControl>
        <FormControl >
          <RadioGroup value={value} onChange={handleChange}>
            <FormControlLabel value="oneway" control={<Radio color="default" />} label="OneWay" />
          </RadioGroup>
        </FormControl>
        {value=== 'return' && <FormReturn onSetValue={onSetValue}/>}
        {value === 'oneway' && <FormOneWay onSetValue={onSetValue} />}
        {value=== 'return' && <Link to={url2}><button disabled={!from || !to || !departure || !returnTime || !cabine } className='search-flights grow br4'>Search Flights</button></Link>}
        {value=== 'oneway' && <Link to={url}><button disabled={!from || !to || !departure || !cabine } className='search-flights grow br4'>Search Flights</button></Link>}
      </form>      
    </>
  )
}
export default ReturnAndOneWay;

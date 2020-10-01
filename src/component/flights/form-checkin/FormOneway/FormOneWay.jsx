import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  formControl: {
  margin: theme.spacing(5),
  minWidth: 10,
  },
}));

const FormOneWay = ({ onSetValue }) => {
  const [state, setState] = useState({
    FromCountry: '',
    name: '',
    ToCountry: '',
    Departure:'',
    Cabine: '',
  });

  const handleChange = name => event => {
    const value = event.target.value;
    onSetValue(name, value);
    setState({
      ...state,
      [name]: value,
    });
  };

  return(
    <div className='return'>
      <FormControl className = {useStyles().formControl}>
        <FormHelperText>From*</FormHelperText>
        <NativeSelect 
          value = {state.country}
          onChange = {handleChange('FromCountry')}
        >
          <option>None</option>
          <option>Canada</option>
          <option>China</option>
          <option>England</option>
          <option>Germany</option>
          <option>Italy</option>
          <option>Portugal</option>
        </NativeSelect>
      </FormControl>       
      <FormControl className = {useStyles().formControl}>
        <FormHelperText >To*</FormHelperText>
        <NativeSelect 
          value = {state.ToCountry}
          onChange = {handleChange('ToCountry')}
        >
          <option>None</option>
          <option>Canada</option>
          <option>China</option>
          <option>England</option>
          <option>Germany</option>
          <option>Italy</option>
          <option>Portugal</option>
        </NativeSelect>
      </FormControl>
      <FormControl className = {useStyles().formControl}>
        <FormHelperText>Departure*</FormHelperText>
        <TextField
          value = {state.Departure}
          onChange = {handleChange('Departure')}
          type = "date"
          InputLabelProps = {{
          shrink: true,
          }}/>
      </FormControl>
      <FormControl className = {useStyles().formControl}>
        <FormHelperText>Return</FormHelperText>
        <TextField disabled 
          value = {state.Return}
          onChange = {handleChange('Return')}
          id = "date"
          type = "date"
          InputLabelProps = {{
            shrink: true,
          }}/>
      </FormControl>
      <FormControl className = {useStyles().formControl}>
        <FormHelperText>Cabin Class*</FormHelperText>
        <NativeSelect
          value = {state.Cabine}
          onChange = {handleChange('Cabine')}
        >
          <option>None</option>
          <option>Economy</option>
          <option>Premium Economy</option>
          <option>Business Class</option>
          <option>First Class</option>
        </NativeSelect>
      </FormControl>  
    </div>
  )
}
export default FormOneWay;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  formControl: {
  margin: theme.spacing(5),
  minWidth: 10,
  },
}));

const CardForm = ({ onSetValue }) => {
  const [state, setState] = useState({
    FromCountry: '',
    name: '',
    ToCountry: '',
    Company: '',
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
    <div className = 'return'>
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
        <FormHelperText required>Company*</FormHelperText>
        <NativeSelect
          value = {state.Company}
          onChange = {handleChange('Company')}
        >
          <option>None</option>
          <option>Adria</option>
          <option>Advanced Air</option>
          <option>Aegean</option>
          <option>Air Canada</option>
          <option>Air China</option>
          <option>Air Europa</option>
          <option>Lufthansa</option>
          <option>Olympic</option>
          <option>Skyjet Airlines</option>
          <option>United</option>
        </NativeSelect>
      </FormControl>  
    </div>
  )
}
export default CardForm;

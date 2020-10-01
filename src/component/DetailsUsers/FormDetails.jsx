import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as C from './FunctionStep';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));

const FormDetails = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };  
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <>
      <div className={classes.root}>
        <h4 className='title'>Please, complete all fields</h4> <hr />
        <Stepper activeStep={activeStep} orientation="vertical">
          {C.getSteps().map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                {C.getStepContent(index)}
                <>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}> Back </Button>                   
                  <Button variant="contained" value='next' color="primary"   onClick={handleNext} className={classes.button} >
                    {activeStep === C.getSteps().length - 1 ? 'Finish' : 'Next'}     
                  </Button>
                </>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === C.getSteps().length && (
            <Typography> Your payment is complete! Nice Trip!
            </Typography>)}
      </div>
    </>
  );
}
export default FormDetails;

import React, {memo} from 'react'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import InputBase from '@material-ui/core/InputBase'

const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
}))(InputBase);
  
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

const SelectField = ({title, onChange, value, children}) => {
  const classes = useStyles()
  return(
    <FormControl className={classes.margin}>
      {title &&
        <InputLabel htmlFor="age-customized-select">{title}</InputLabel>
      }
      <Select
        value={value}
        onChange={onChange}
        input={<BootstrapInput name="age" id="age-customized-select" />}
      >{children}</Select>
    </FormControl>
  )
}

export default memo(SelectField)


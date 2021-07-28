import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
     
    },
  },
  paper: {
    padding: theme.spacing(0),
    boxShadow:'0px 0px 0px 0px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    background:'white',
    margin: '10px 0',
  },
//   buttonSubmit: {
//     marginBottom: 10,
//   },
buttonSubmit: {
    marginTop: 30,
    '&:hover': {
        backgroundColor: '#000a12',
        color:'white',
        boxShadow: 'none',
      },
},
 
}))
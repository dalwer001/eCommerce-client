import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
     
    },
  },
  paper: {
    padding: theme.spacing(1),
    boxShadow:'0px 0px 0px 0px',
   height: '500px',
   width: '500px',
   paddingTop:'70px',
   marginTop:'100px',
   marginLeft:'150px',
     
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

buttonSubmit: {
    marginTop: 30,
    marginLeft:330,
    backgroundColor:'#000a12',
    color: 'white',
    '&:hover': {
        backgroundColor: '#FDD420',
        color:'black',
        
      },
},
 
}))
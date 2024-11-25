import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';

const Login = () => { 
    const [login, setLogin] = useState('');

    return(
    <Grid item xs={12}>
        <FormControl fullWidth>
        <Input id="login_user" aria-describedby="login_user_helper_text" value={login} onChange={e => { setlogin(e.target.value) }} />
        <FormHelperText id="login_user_helper_text">Insira seu login.</FormHelperText>
        </FormControl>
    </Grid>);
}

export default Login;
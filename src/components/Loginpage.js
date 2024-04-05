// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
// import AutoStoriesIcon from '@mui/icons-material/AutoStories';
// import { Link as RouterLink } from 'react-router-dom';

// const Loginpage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = () => {
//     console.log(formData);
//   };

//   return (
//     <>
//       <Box sx={{ backgroundColor: '#F0F0F0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//         <AppBar position="static" sx={{ backgroundColor: '#A03037', height: '9.5vh' }}>
//           <Toolbar variant="dense">
//             <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '150px', marginRight: 'auto' }}>
//               <AutoStoriesIcon sx={{ marginRight: '4px', marginTop: '10%'}} />
//               <Typography variant="h6" color="inherit" component="div" sx={{marginTop: '10%'}}>
//                 BookStore
//               </Typography>
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <Box
//           height={350}
//           width={400}
//           marginLeft="auto"
//           marginRight="auto"
//           marginTop={15}
//           display="flex"
//           flexDirection="column"
//           p={2}
//           sx={{ backgroundColor: 'white', border: '1px solid grey', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
//           <Box sx={{ marginBottom: 'auto' }}>
//             <Typography variant="h6" gutterBottom textAlign="center" marginBottom={6} marginLeft={2}>
//               Login Page
//             </Typography>
//             <Box display="flex" alignItems="center" marginBottom={5} marginLeft={2}>
//               <Typography variant="subtitle1" marginRight={3.5}>
//                 Username:
//               </Typography>
//               <TextField
//                 variant="outlined"
//                 size="small"
//                 placeholder='Username'
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//               />
//             </Box>
//             <Box display="flex" alignItems="center" marginBottom={2} marginLeft={2}>
//               <Typography variant="subtitle1" marginRight={4}>
//                 Password:
//               </Typography>
//               <TextField
//                 variant="outlined"
//                 size="small"
//                 type="password"
//                 placeholder='Password'
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </Box>
//           </Box>
//           <Box display="flex" justifyContent="center" marginBottom={4} marginLeft={3}>
//             <Link component={RouterLink} to="/register" color="primary" underline="always">
//               Create new account
//             </Link>
//           </Box>
//           <Box display="flex" justifyContent="center" marginBottom={4} marginLeft={2}>
//             <Link component={RouterLink} to="homepage">
//             <Button variant="contained" color="primary" onClick={handleSubmit}>
//               Login
//             </Button>
//             </Link>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Loginpage;




import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import BookService from '../service/BookService'; 

const Loginpage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await BookService.loginUser({
        email: formData.username,
        password: formData.password
      });

      if (response && response.data) { 
        console.log(response.data);
        if (response.data === 'Invalid Login. Try Again') {
          setError("Invalid credentials");
        } else {
          navigate('/homepage');
        }
      } else {
        console.error('Login failed:', response);
        setError("Invalid credentials"); 
      }
    } catch (error) {
      console.error('Login failed:', error); 
      setError("Invalid credentials"); 
    }
  };
  
  return (
    <>
      <Box sx={{ backgroundColor: '#F0F0F0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static" sx={{ backgroundColor: '#A03037', height:'9.5vh'}}>
          <Toolbar variant="dense">
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '150px', marginRight: 'auto' }}>
              <AutoStoriesIcon sx={{ marginRight: '4px', marginTop: '10%'}} />
              <Typography variant="h6" color="inherit" component="div" sx={{marginTop: '10%'}}>
                BookStore
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          height={350}
          width={400}
          marginLeft="auto"
          marginRight="auto"
          marginTop={15}
          display="flex"
          flexDirection="column"
          p={2}
          sx={{ backgroundColor: 'white', border: '1px solid grey', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <Box sx={{ marginBottom: 'auto' }}>
            <Typography variant="h6" gutterBottom textAlign="center" marginBottom={6} marginLeft={2}>
              Login Page
            </Typography>
            <Box display="flex" alignItems="center" marginBottom={5} marginLeft={2}>
              <Typography variant="subtitle1" marginRight={3.5}>
                Username:
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                placeholder='Username'
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Box>
            <Box display="flex" alignItems="center" marginBottom={2} marginLeft={2}>
              <Typography variant="subtitle1" marginRight={4}>
                Password:
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                type="password"
                placeholder='Password'
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" marginBottom={2} marginLeft={2}>
            {error && <Typography color="error">{error}</Typography>} {/* Display error message */}
          </Box>
          <Box display="flex" justifyContent="center" marginBottom={4} marginLeft={2}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Login
            </Button>
          </Box>
          <Box display="flex" justifyContent="center" marginBottom={4} marginLeft={3}>
            <Link component={RouterLink} to="/register" color="primary" underline="always">
              Create new account
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Loginpage;
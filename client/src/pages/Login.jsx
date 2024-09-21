import React, { useState } from "react";

import { Paper, Container, Typography, TextField, Button, Stack, Avatar, IconButton } from "@mui/material";

import {CameraAlt as CameraAltIcon} from "@mui/icons-material";

const Login = () => {
  const [IsLogin, setIsLogin] = useState(true);

  const ToggleLogined = () => setIsLogin((prev) => !prev);
  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {IsLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }}>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />

              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
              />

              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
              <Typography m={"1rem"} textAlign={"center"}>
                OR
              </Typography>
              <Button
                variant="text"
                color="secondary"
                onClick={ToggleLogined}
                fullWidth
              >
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          // <span>Register</span
          <>
            <Typography variant="h5">Register</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }}>

              <Stack position={"relative"}  width={"10rem"} margin={'auto'}>
                <Avatar sx={{
                  width:"10rem",
                  height:"10rem",
                  objectFit:"contain"
                }}>

                  <IconButton>
                  <CameraAltIcon>
                    {/* <VisuallyHidden>Upload Avtar</VisuallyHidden> */}
                  </CameraAltIcon>
                  </IconButton>

                </Avatar>
              </Stack>
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
              />

              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
              />

              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />

              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
              />

              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
               SignUp
              </Button>
              <Typography m={"1rem"} textAlign={"center"}>
                OR
              </Typography>
              <Button
                variant="text"
                color="secondary"
                onClick={ToggleLogined}
                fullWidth
              >
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;

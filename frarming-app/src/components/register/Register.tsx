import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";

interface IRegisterFormProps {
  type: string;
}

const Register = () => {
  const theme = useTheme(); // Access the current theme
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md")); // Check for medium screens (md)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
      console.log(data);
  };

  return (
    <Container
      sx={{
        mt: 4,
      }}
    >
      <Grid container spacing={isMdScreen ? 2 : 4}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ position: "relative", height: isMdScreen ? "650px" : "auto" }}
        >
          <Card
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            {/* Video Component */}
            <video
              autoPlay
              loop
              muted
              width="100%"
              height={isMdScreen ? "100%" : "auto"}
              style={{ flex: 1, maxWidth: "100%", maxHeight: "100%" }}
            >
              <source src="150904 (540p).mp4" type="video/mp4" />
            </video>
            <Grid
              container
              sx={{
                position: "absolute",
                bottom: "20px",
                justifyContent: "space-around",
                background: "rgba(255, 255, 255, 0.248)",
                backdropFilter: "blur(2px)",
                padding: 2,
                width: "94%",
                margin: "10px",
                borderRadius: "10px",
                alignItems: "center",
                fontSize: "1.2rem",
                color: "white",
                fontWeight: "700",
              }}
            >
              <Grid xs={8}>Have an account ?</Grid>
              <Grid xs={4}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* Registration Form Section */}
        <Grid item xs={12} md={6}>
          <Card
            // component="form"
            // onSubmit={handleSubmit}
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 70px ",
              height: "100%",
            }}
          >
            {/* Registration Form */}
            <ThemeProvider theme={createTheme()}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: isMdScreen ? 2 : 8, // Adjust margin based on screen size
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img src="icons8-irrigation-64.png" alt="logo" />
                  <Typography component="h1" variant="h5">
                    Registration
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ mt: isMdScreen ? 2 : 3 }} // Adjust margin based on screen size
                  >
                    <Grid container spacing={isMdScreen ? 2 : 3}>
                      {/* Adjust spacing based on screen size */}
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="given-name"
                          required
                          fullWidth
                        //   id="name"
                          label="Name"
                          {...register("name")}
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                        //   id="email"
                          label="Email Address"
                          {...register("email")}
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Password"
                          type="password"
                        //   id="password"
                          {...register("password")}
                          autoComplete="new-password"
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: isMdScreen ? 2 : 3, mb: 2 }} // Adjust margin based on screen size
                    >
                      Register
                    </Button>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;

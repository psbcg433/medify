import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Stack,
} from "@mui/material";
import React from "react";
import theme from "../../theme";

const BlogSection = () => {
  const blogposts = [
    {
      avatar: "/drrebecca.png",
      logImg: "/Detox.png",
    },
    {
      avatar: "/drrebecca.png",
      logImg: "/Detox.png",
    },
    {
      avatar: "/drrebecca.png",
      logImg: "/Detox.png",
    },
  ];

  return (
    <Box
      sx={{
        padding: "2em",
      }}
    >
      <Container>
        <Typography
          variant="button"
          component="h2"
          sx={{
            color: theme.palette.primary.dark,
            textAlign: "center",
            fontSize:{xs:'12px',md:'16px'}
          }}
        >
          Blog & News
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            color: theme.palette.secondary.dark,
            textAlign: "center",
              fontSize:{xs:'1.5em',md:'3em'}
          }}
        >
          Read Our Latest News
        </Typography>
        <Grid container sx={{ marginTop: "2em" , gap:{xs:'1em',md:0}}}>
          {blogposts.map((blogdata) => (
            <Grid item size={{xs:12,md:4}}>
              <Card
                elevation={0}
                sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={blogdata.logImg}
                  alt="Detox food"
                />
                <CardContent>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block", mb: 0.5 }}
                  >
                    Medical | March 31, 2022
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    sx={{ fontWeight: 600, lineHeight: 1.4 }}
                  >
                    6 Tips To Protect Your Mental Health When You’re Sick
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mt: 1.5 }}
                  >
                    <Avatar
                      src={blogdata.avatar}
                      sx={{ width: 24, height: 24, fontSize: 12 }}
                    />

                    <Typography variant="body2" color="text.secondary">
                      Rebecca Lee
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogSection;

import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          mx: "auto",
          maxWidth: "800px",
          p: 4,
          backgroundColor: "#f0f4f8",
          borderRadius: "12px",
          boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
          "& h4": {
            fontWeight: "bold",
            my: 3,
            fontSize: "2.5rem",
            color: "#2c3e50",
          },
          "& p": {
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#34495e",
            textAlign: "justify",
            mb: 2,
          },
          "& p:last-of-type": {
            marginBottom: 0,
          },
          "@media (max-width:600px)": {
            my: 8,
            p: 2,
            "& h4": {
              fontSize: "2rem",
            },
            "& p": {
              fontSize: "1rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To T-Restaurant</Typography>
        <p>
          At T-Restaurant, we are dedicated to offering you the finest dining experience. With a passion for culinary arts and fresh, locally-sourced ingredients, we ensure each dish is crafted to perfection, blending flavors that will leave you craving more.
        </p>
        <p>
          Whether you're joining us for a casual meal or a special occasion, we are committed to providing excellent service and delicious food that caters to every taste. Our warm and inviting atmosphere makes T-Restaurant the perfect destination for all food lovers.
        </p>
        <p>
          Come and enjoy a memorable dining experience where exceptional flavors meet top-notch hospitality. We look forward to serving you soon!
        </p>
      </Box>
    </Layout>
  );
};

export default About;

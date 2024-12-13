import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4, // Add gap between items
          p: 4, // Padding around the container
        }}
      >
        {MenuList.map((menu) => (
          <Card
            key={menu.name} // Added key for better React rendering
            sx={{
              width: "350px", // Defined fixed width for better alignment
              borderRadius: "16px", // Rounded corners for a modern look
              overflow: "hidden", // Ensure content stays inside the card
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)", // Subtle shadow for professional appearance
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)", // Scale up slightly on hover
                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)", // Stronger shadow on hover
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={menu.image}
                alt={menu.name}
                sx={{
                  height: "300px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)", // Slight zoom effect on image hover
                  },
                }}
              />
              <CardContent
                sx={{
                  textAlign: "center", // Center-align text for better readability
                  p: 3, // Padding inside the card
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    color: "#333", // Darker font for better contrast
                    mb: 2, // Margin below the title
                  }}
                >
                  {menu.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#777", // Lighter text for description
                    fontSize: "0.9rem", // Slightly smaller text
                  }}
                >
                  {menu.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;

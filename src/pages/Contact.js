import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import styles from "../styles/Contact.module.css"; // Import the CSS module

const Contact = () => {
  return (
    <Layout>
      <Box className={styles.container}>
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p className={styles.description}>
          "Welcome to T-Restaurant, where exceptional flavors and a warm, inviting atmosphere come together. Our menu is thoughtfully crafted with fresh, locally-sourced ingredients to deliver unforgettable dining experiences. Whether you're joining us in-house, taking out, or ordering online, we’re dedicated to serving up delicious meals with top-notch hospitality. Come taste the difference at T-Restaurant!"

          This description highlights the quality and experience at your restaurant while keeping it simple and engaging.
        </p>
      </Box>
      <Box className={styles.tableContainer}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell className={styles.tableHeader} align="center">
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={styles.tableCell}>
                  <SupportAgentIcon className={styles.icon} sx={{ color: "red" }} /> 1800-00-0000 (toll-free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={styles.tableCell}>
                  <MailIcon className={styles.icon} sx={{ color: "skyblue" }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={styles.tableCell}>
                  <CallIcon className={styles.icon} sx={{ color: "green" }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;

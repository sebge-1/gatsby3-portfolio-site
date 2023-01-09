import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// Packages
import React, { useState } from "react";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

function ContactForm() {
  const [open, setOpen] = useState(false);

  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    }).catch((error) => alert(error));
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <Box sx={{ flexGrow: 1, mx: "2%" }}>
        <form
          id="contact-form"
          name="contact-form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                onChange={handleChange}
                style={{ width: "100%" }}
                id="outlined-error-helper-text"
                label="First name"
                placeholder="Enter first name..."
                name="firstName"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={handleChange}
                style={{ width: "100%" }}
                id="outlined-error-helper-text"
                label="Last name"
                placeholder="Enter last name..."
                name="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                style={{ width: "100%" }}
                id="outlined-error-helper-text"
                label="Email"
                placeholder="Enter contact email..."
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                style={{ width: "100%" }}
                id="outlined-error-helper-text"
                label="Subject"
                placeholder="Enter subject regards..."
                name="subject"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                style={{ width: "100%" }}
                placeholder="Enter reason for contact"
                multiline
                rows={4}
                name="content"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{ width: "100%" }}
                variant="contained"
                type="submit"
              >
                Send Message
              </Button>
            </Grid>
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

export default ContactForm;

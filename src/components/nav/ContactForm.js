import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { navigate } from "gatsby-link";
// Packages
import React, { useState } from "react";
// Components
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

function ContactForm() {
  const [state, setState] = React.useState({});

  const handleChange = (event) => setState({ value: event.target.value });

  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2>Contact Form</h2>
      <Box sx={{ flexGrow: 1, mx: "2%" }}>
        {/* <form
          id="contact-form"
          name="contact-form"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
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
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={handleChange}
                style={{ width: "100%" }}
                id="outlined-error-helper-text"
                label="Last name"
                placeholder="Enter last name..."
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                style={{ width: "100%" }}
                id="outlined-error-helper-text"
                label="Email"
                placeholder="Enter contact email..."
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                style={{ width: "100%" }}
                id="outlined-error-helper-text"
                label="Subject"
                placeholder="Enter subject regards..."
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                style={{ width: "100%" }}
                placeholder="Enter reason for contact"
                multiline
                rows={4}
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
              <Snackbar
                open={open}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              >
                <Alert severity="success" sx={{ width: "100%" }}>
                  Message Sent!
                </Alert>
              </Snackbar>
            </Grid>
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
          </Grid>
        </form> */}
        <form
          id="contact-form"
          name="contact-form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <input
                type="text"
                name="name"
                maxLength="100"
                required="required"
                size="60"
                placeholder="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="text"
                name="email"
                maxLength="100"
                required="required"
                size="60"
                placeholder="you@email.com"
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="text"
                name="subject"
                maxLength="200"
                size="60"
                placeholder="Subject (optional)"
              />
            </Grid>
            <Grid item xs={12}>
              <textarea
                name="message"
                required="required"
                maxLength="2000"
                cols="6"
                rows="9"
                placeholder="Your message goes here..."
              ></textarea>
            </Grid>

            <Grid item xs={12}>
              <button
                className="send-button"
                type="submit"
                value="Submit"
              ></button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

export default ContactForm;

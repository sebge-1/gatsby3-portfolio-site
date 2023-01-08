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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        firstName,
        lastName,
        email,
        subject,
        content,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
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
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                style={{ width: "100%" }}
                id="outlined-error-helper-text"
                label="First name"
                placeholder="Enter first name..."
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                style={{ width: "100%" }}
                id="outlined-error-helper-text"
                label="Last name"
                placeholder="Enter last name..."
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                style={{ width: "100%" }}
                id="outlined-error-helper-text"
                label="Email"
                placeholder="Enter contact email..."
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                style={{ width: "100%" }}
                id="outlined-error-helper-text"
                label="Subject"
                placeholder="Enter subject regards..."
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setContent(e.target.value)}
                value={content}
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
        </form>
      </Box>
    </div>
  );
}

export default ContactForm;

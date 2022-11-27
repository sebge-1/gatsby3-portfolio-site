import "../stylesheets/index.scss"

import React from "react";
import Head from "../components/head";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Head title="Home"></Head>
        <h1>Hello</h1>
      </>
    )
  }
}
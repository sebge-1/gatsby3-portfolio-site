import "../stylesheets/index.scss"

import React from "react";
import { SEO } from "../components/SEO"

export default class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Hello</h1>
      </>
    )
  }
}


export const Head = () => (
  <SEO title="Home" />
)
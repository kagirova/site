import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <header>
      <div id="header-wrapper">
        <a href="/">
          <img alt="" src={data.logo.publicURL} />
        </a>
      </div>
    </header>
    <div id="about-wrapper" className="clearfix container">
      <div id="avatar">
        <img alt="" src={data.ava.publicURL} />
      </div>
      <div id="about-me">
        <div>
          <b>
            Мария Кагирова
          </b>
        </div>
        <div>
          Рисую, гончарю,<br/>создаю дизайн полиграфии
        </div>
      </div>
    </div>
    <div className="insta-container clearfix">
      {
        data.allInstaNode.edges.map((edge) => 
      (
        <div key={edge.node.id} className="insta-node">
          <a target="_blank" rel="noopener noreferrer" href={`https://www.instagram.com/p/${edge.node.id}`}>
            <img alt="" src={edge.node.localFile.childImageSharp.resize.src} />
          </a>
        </div>
        )
        )
      }
    </div>
    <div id="bottom" className="clearfix">
      <span role="img" aria-label="hello">❤️❤️❤️</span>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        social {
          name
          link
        }
      }
    }
    allInstaNode {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              resize(width: 420, height: 420, quality: 100) {
                src
              }
            }
          }
        }
      }
    }
    icons: allFile(filter: {relativeDirectory: {eq: "files/icons"} }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
    logo: file(name: {eq: "logo"}) {
      publicURL
    }
    ava: file(name: {eq: "avatar"}) {
      publicURL
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import { CookiesProvider } from 'react-cookie';
import Layout from "../components/Layout.js"
import Seo from "../components/Seo.js"
import Hero from "../components/Hero/Hero.js"
import CookiesConsent from "../components/Cookies.js"
import Fade from 'react-reveal/Fade'
import Line from '../components/Common/Line'

function IndexPage(props) {

  const contentJson = props.data.dataJson

  return (
    <Layout >

      <Seo page={'home'} title={contentJson.hero.title} lang={contentJson.general.lang} metas={contentJson.general} image={contentJson.hero.image_profile.childImageSharp} />

      <Hero data={contentJson.hero}>
        <Fade>
          <div className="hero-image-wrapper">
            <div className="box-image hero-image">
              <img src={contentJson.hero.image_profile.childImageSharp.fluid.src} className="fluido" alt="profile" />
            </div>
          </div>
          <h1 className="hero-title">{contentJson.hero.title}</h1>
          <div className="hero-subtitle">{contentJson.hero.subtitle}</div>
          <Line />
          <div className="hero-social">
            {contentJson.hero.socialmedia.map((key) => <a key={key.name} href={key.link} target="_blank" rel="noopener noreferrer"><i className={`fab fa-2x fa-${key.name}`}></i></a>)}
          </div>
        </Fade>
      </Hero>

      <CookiesProvider>
        <CookiesConsent data={contentJson.tags} />
      </CookiesProvider>
    </Layout >
  )
}

export default IndexPage

export const imageData = graphql`
  query{
      dataJson {      
        ...generalFields
        ...heroFields
        ...tagsFields
  }  
}
`

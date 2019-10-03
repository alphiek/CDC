import React from "react"
import Helmet from "react-helmet"
import { Link } from 'gatsby'
import FadeIn from '../components/Animations/FadeIn'
import { TopWrapper, BackgroundImage, PenguinContainer } from '../components/HoldingPage/HoldingPage'
import texture404 from '../images/texture404.svg'
import penguin from '../images/penguin.svg'


const NotFoundPage = () => (
  <>
  <Helmet>
    <html lang="en" />
    <title>Not Found Page</title>
    <meta name="description" content='404 route does not exist'></meta>
  </Helmet>
  <section>
    <FadeIn>
      <TopWrapper>
        <p className='cape'>Cape</p>
        <PenguinContainer src={penguin} alt='Image of a jackass penguin' />
      </TopWrapper>
      <p className='designs'>Designs</p>
      <h1>Web Development & Graphics</h1>
      <hr />
      <Link to='/' className='notFound'>404 Click here</Link>
      <hr className='bottom' />
      <p className='route'>This route does not exist</p>
    </FadeIn>
    <BackgroundImage src={texture404} alt='background texture of person holding hands in front of face' />
  </section>
  </>
)

export default NotFoundPage

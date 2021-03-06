import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { StyledFrontpageContent } from '../../styledComponents/StyledFrontpageContent'
import Context from '../../context/Context'
import DispatchContext from '../../context/DispatchContext'

const FrontpageContent = (callback) => {
  const { menu, home } = useContext(Context)
  const { setMenu, setHome } = useContext(DispatchContext)

  useEffect(() => {
    setHome(true)
    window.scrollTo(0, 0)
  }, [])

  const openMenu = () => {
    if (menu) {
      setMenu(false)
    } else {
      setMenu(true)
    }
  }

  return (
    <StyledFrontpageContent style={{ opacity: menu ? 0.2 : 1 }}>
      <Helmet>
        <title>SR • Homepage</title>
        <meta name="description" content="Frontend Developer and UI/UX Designer" />
        <meta name="theme-color" content="#2B2B2D" />
      </Helmet>
      <div className="hero-content">
        <div className="hero">
          <h1 className="name">Sura Rzayeva</h1>
          <h3 className="profession">
            Frontend Developer <br className="mobile-break" />
            <span>|</span> UI/UX Designer
          </h3>
          <div className="buttons">
            <button onClick={openMenu} className="button portfolio-btn">
              Portfolio
            </button>
            <Link className="contact-link" to="/contact">
              {' '}
              <button className="button contact-btn">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </StyledFrontpageContent>
  )
}

export default FrontpageContent

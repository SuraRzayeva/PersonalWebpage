import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { StyledBlog } from '../../styledComponents/StyledBlog'
import BlogPost from '../Molecules/BlogBox'
import Up from '../Atoms/Up'
import Context from '../../context/Context'
import DispatchContext from '../../context/DispatchContext'
import Blog1 from '../../img/blog/post1.png'
import Blog2 from '../../img/blog/post2.png'
import Blog3 from '../../img/blog/post3.png'
import Blog4 from '../../img/blog/post4.png'

const Blog = () => {
  const { menu, home, loading } = useContext(Context)
  const { setMenu, setHome, setLoading } = useContext(DispatchContext)
  const [loadedImages, setLoadedImages] = useState(0)

  const [state, setState] = useState({
    articles: [
      {
        id: 4,
        title: 'Time to free yourself',
        img: Blog4,
        text: 'It’s time to wake up, sweetheart, you’re missing life. Let’s play a game. We ask questions… and when it starts to hurt, we drink. I start. Why do people think that ‘happiness’ is equal to ‘pleasure’?  ‘Pleasure’ is a biological phenomenon... ',
      },
      {
        id: 2,
        img: Blog2,
        title: 'We are too loud.',
        text: '… can we just stop? No, we can’t. We are just a bunch of lost souls, hovering on life… silently, without shadows. Do you know that shadows can’t have shadows? I know your darkness. I can see you. Darkness is the only absolute reality we can rely on. So, relax… embrace it… and maybe, try to kind of… ',
      },
      {
        id: 1,
        title: 'They say I have sad eyes',
        img: Blog1,
        text: 'There is an immense curiosity growing inside me, I cannot stop. When I was a child, the questions were easier to answer. Or maybe I was just too naïve to be convinced with answers deeply rooted in our manmade fictional culture, which is considered an absolute reality… which is...',
      },
      {
        id: 3,
        img: Blog3,
        title: 'Morality',
        text: 'What’s the point? Congratulations, if you’ve reached to the point of asking this question. Welcome to the edge of other people’s reality. There is no way back. I’m sorry, it’s too late to hide… you have already been infected with existentialism...',
      },
    ],
  })

  const countTimes = () => {
    setLoadedImages(loadedImages + 1)
  }

  useEffect(() => {
    setLoading(true)
    setHome(false)
  }, [])

  useEffect(() => {
    if (loadedImages === 4) {
      console.log(loadedImages)
      setLoading(false)
    }
  }, [loadedImages])

  return (
    <div style={{ visibility: loadedImages === 4 ? 'visible' : 'hidden' }}>
      <StyledBlog style={{ opacity: menu ? '0.2' : '1' }}>
        <Helmet>
          <title>SR • Blog Posts</title>
          <meta name="description" content="My blog posts about philosophy and science" />
          <meta name="theme-color" content="#2B2B2D" />
        </Helmet>
        <div className="title"> BLOG </div>
        <div className="blog-gallery">
          {state.articles.map((post) => {
            return <BlogPost callback={countTimes} key={post.id} id={post.id} title={post.title} text={post.text} url={post.img} />
          })}
        </div>
        <Up />
      </StyledBlog>
    </div>
  )
}

export default Blog

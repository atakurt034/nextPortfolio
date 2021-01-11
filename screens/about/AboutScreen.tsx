import React, { useState } from 'react'
import { CardMedia, Grid, Container } from '@material-ui/core'
import TypeWords from './typewriter/Typewriter'
import clsx from 'clsx'
import { useStyles } from './aStyle'
import Image from 'next/image'

import { Fade } from 'react-reveal'

const About: React.FC = () => {
  const classes = useStyles()
  const [img, setImg] = useState('/images/profile.jpg')
  const [load, setLoad] = useState(false)

  const imageHandler = (sentImage: string) => {
    setImg(sentImage)
  }

  return (
    <div id='about'>
      <Container maxWidth='md'>
        <div id='page' className={classes.about}>
          <Grid container>
            <Grid item xs={12} sm={6} className={classes.imagewrapper}>
              <Fade in={load}>
                <Image
                  src={img}
                  alt='Picture of the author'
                  className={classes.image}
                  height={400}
                  width={400}
                />
              </Fade>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.typewriter}>
              <Container className={classes.container}>
                <TypeWords
                  image={imageHandler}
                  enter={() => setLoad(true)}
                  exit={() => setLoad(false)}
                />
              </Container>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default About

import React from 'react'
import {
  CardMedia,
  Avatar,
  Grid,
  Chip,
  Typography,
  Paper,
  Container,
  Box,
} from '@material-ui/core'
import { useStyles } from './sStyles'
import { backend, frontend, ongoing } from './sData'

import { Fade } from 'react-reveal'
import clsx from 'clsx'
import DiverText from '../../components/DividerWithText'

import styles from './sStyles.module.css'

const Stacks = () => {
  const classes = useStyles()

  return (
    <Paper id='stacks'>
      <Grid container className={classes.stacks}>
        <Container maxWidth='md' className={classes.title_container}>
          <Typography variant='h4' className={classes.title}>
            <DiverText>Stacks</DiverText>
          </Typography>
          <Fade left>
            <Grid container className={classes.itemContainer}>
              <Grid item xs={12} className={classes.item}>
                <Paper elevation={12} className={classes.paper}>
                  <Typography variant='h5' className={classes.subTitle}>
                    {' '}
                    Frontend{' '}
                  </Typography>
                  {frontend.map((i) => (
                    <Chip
                      key={i.name}
                      variant='outlined'
                      className={classes.list}
                      label={i.name}
                      avatar={
                        <Avatar
                          variant='rounded'
                          style={{
                            backgroundColor: 'transparent',
                          }}
                        >
                          <CardMedia
                            image={`/icons/` + i.image + `.jpg`}
                            component='img'
                          />
                        </Avatar>
                      }
                    />
                  ))}
                </Paper>
              </Grid>
            </Grid>
          </Fade>
          <Fade right>
            <Grid container className={classes.itemContainer}>
              <Grid item xs={12} className={classes.item}>
                <Paper elevation={12} className={classes.paper}>
                  <Typography variant='h5' className={classes.subTitle}>
                    {' '}
                    Backend{' '}
                  </Typography>
                  {backend.map((i) => (
                    <Chip
                      variant='outlined'
                      className={classes.list}
                      key={i.name}
                      label={i.name}
                      avatar={
                        <Avatar
                          variant='rounded'
                          style={{ backgroundColor: 'transparent' }}
                        >
                          <CardMedia
                            image={`/icons/` + i.image + `.jpg`}
                            component='img'
                          />
                        </Avatar>
                      }
                    />
                  ))}
                </Paper>
              </Grid>
            </Grid>
          </Fade>
          <Fade left>
            <Grid container>
              <Grid item xs={12} className={classes.item}>
                <Paper elevation={12} className={classes.paper}>
                  <Box className={classes.ongoing}>
                    <Typography
                      variant='h5'
                      component='span'
                      className={clsx(classes.loading, styles.loading)}
                    >
                      Ongoing
                    </Typography>
                  </Box>
                  <Box mt={3} style={{ textAlign: 'center' }}>
                    {ongoing.map((i) => (
                      <Chip
                        variant='outlined'
                        className={classes.list}
                        key={i.name}
                        label={i.name}
                        avatar={
                          <Avatar
                            variant='rounded'
                            style={{ backgroundColor: 'transparent' }}
                          >
                            <CardMedia
                              image={`/icons/` + i.image + `.jpg`}
                              component='img'
                            />
                          </Avatar>
                        }
                      />
                    ))}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Fade>
        </Container>
      </Grid>
    </Paper>
  )
}

export default Stacks

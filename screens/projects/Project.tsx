import React from 'react'

import GitHubIcon from '@material-ui/icons/GitHub'
import FavoriteIcon from '@material-ui/icons/Favorite'

import Image from 'next/image'

import {
  Tooltip,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'
import { useStyles } from './pStyle'

import DiverText from '../../components/DividerWithText'

import { Bounce, Zoom } from 'react-reveal'

const Project = ({ projects }) => {
  const classes = useStyles()

  const clickHandler = (url: string) => {
    window.open(url, '_blank')
  }
  const gitHandler = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <Paper id='project' className={classes.paper}>
      <Container className={classes.projects}>
        <Grid container justify='center'>
          <Typography variant='h5' className={classes.title}>
            <DiverText>Projects</DiverText>
          </Typography>
        </Grid>
        <Grid container justify='center' style={{ margin: '0 0 10px 0' }}>
          <Bounce>
            <Typography
              variant='body1'
              gutterBottom
              style={{
                display: 'flex',
                alignItems: 'center',
                fontStyle: 'italic',
              }}
            >
              Click Images to go to the site{' '}
            </Typography>
            <Bounce forever duration={1000}>
              {' '}
              {
                <FavoriteIcon
                  fontSize='default'
                  color='error'
                  style={{ marginLeft: 5 }}
                />
              }
            </Bounce>
          </Bounce>
        </Grid>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={6} lg={4}>
                <Tooltip
                  placement='top'
                  arrow={true}
                  title='Click Image to go to the site'
                >
                  <div>
                    <Zoom cascade delay={index * 100}>
                      <Card
                        elevation={12}
                        style={{ borderRadius: 10 }}
                        className={classes.root}
                      >
                        <CardActionArea
                          onClick={() => clickHandler(project.url)}
                        >
                          <Image
                            src={project.image}
                            alt={project.name}
                            height={300}
                            width={400}
                          />
                          <CardContent className={classes.description}>
                            <Typography variant='h5' className={classes.name}>
                              {project.name}
                            </Typography>
                            <Typography variant='body1'>
                              {project.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            style={{ margin: 'auto' }}
                            variant='contained'
                            size='small'
                            startIcon={<GitHubIcon />}
                            onClick={() => gitHandler(project.github)}
                          >
                            Repository
                          </Button>
                        </CardActions>
                      </Card>
                    </Zoom>
                  </div>
                </Tooltip>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </Paper>
  )
}

export default Project

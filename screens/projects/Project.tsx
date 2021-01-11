import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProjects } from '../../actions/projectActions'

import { ProjectList, ProjectListProps } from '../../constants/projectConstants'

import GitHubIcon from '@material-ui/icons/GitHub'
import FavoriteIcon from '@material-ui/icons/Favorite'

import {
  Tooltip,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'
import { useStyles } from './pStyle'

import DiverText from '../../components/DividerWithText'
import Loader from '../../components/Loader'
import Message from '../../components/Message'

import { Bounce, Zoom } from 'react-reveal'

const Project: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const projectList = useSelector<ProjectList>((state) => state.projectList)
  const { loading, error, projects } = projectList as ProjectListProps

  const clickHandler = (url: string) => {
    window.open(url, '_blank')
  }
  const gitHandler = (url: string) => {
    window.open(url, '_blank')
  }

  useEffect(() => {
    dispatch(listProjects())
  }, [dispatch])

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
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='error'>{error}</Message>
          ) : (
            projects.map((project, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} sm={6} lg={4}>
                  <Tooltip
                    placement='top'
                    arrow={true}
                    title='Click Image to go to the site'
                  >
                    <div>
                      <Zoom cascade delay={index * 200}>
                        <Card
                          elevation={12}
                          style={{ borderRadius: 10 }}
                          className={classes.root}
                        >
                          <CardActionArea
                            onClick={() => clickHandler(project.url)}
                          >
                            <CardMedia image={project.image} component='img' />
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
            ))
          )}
        </Grid>
      </Container>
    </Paper>
  )
}

export default Project

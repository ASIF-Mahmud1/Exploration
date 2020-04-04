import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardContent,CardActions, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import seashellImg from './../assets/images/seashell.jpg'
import Button from 'material-ui/Button'
import {list} from '../solver/api-solver'
//import {list} from '../user/api-user'
const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 330
  }
})

class Home extends Component {
  clickSubmit = () => {
   
    
    list().then((data)=>{
      if(data.error)
      {
        console.log("Gotta error")
      }
      else{
        console.log("All Guuci ", data)

      }
    })
  }
  render() {
    const {classes} = this.props
    return (
        <Card className={classes.card}>
     
          <CardContent>
            <Typography type="body1" component="p">
              Welcome to the MERN Skeleton home page.
            </Typography>
          </CardContent>
          <CardActions>
          <Button color="primary" variant="raised" onClick={this.clickSubmit} className={classes.submit}>Get Me Mah Calculationz</Button>
        </CardActions>
         
        </Card>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardActions, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import seashellImg from './../assets/images/seashell.jpg'
import Button from 'material-ui/Button'
import { list,optimize } from '../solver/api-solver'
import TextField from 'material-ui/TextField'
import Table, {
  TableHead,
  TableRow, TableCell,TableBody
} from 'material-ui/Table';
import FurnitureSolver from '../solver/FurnitureSolver.js'
import SolveLp from '../solver/SolveLp'
import { Divider } from 'material-ui'
const styles = theme => ({
  card: {
//    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 330
  }
})


class Home extends Component {
  state = {
   showFurnitureSolver: true
  }
  
  clickSubmit=()=>{
    this.setState((prevState) => ({
      showFurnitureSolver: !prevState.showFurnitureSolver
    }))
  }

  render() {
    const { classes } = this.props
    return (

      <div>
        <Typography>Home Page</Typography>
        <Button color="primary" variant="raised" onClick={this.clickSubmit} className={classes.submit}> {this.state.showFurnitureSolver?" Hide ":"Show " } Furniture Solver</Button>
        {
          this.state.showFurnitureSolver &&
          <FurnitureSolver/>
        }
        <Divider/>
        <SolveLp/>
  
</div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)

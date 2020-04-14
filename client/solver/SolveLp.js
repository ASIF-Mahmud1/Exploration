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


class SolveLp extends Component {
  state = {
  }
  
  

  render() {
    const { classes } = this.props
    return (

      <div>
        <Typography>SolveLp Component</Typography>
     
</div>
    )
  }
}

SolveLp.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SolveLp)
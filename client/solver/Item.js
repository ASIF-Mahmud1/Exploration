import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardActions, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import seashellImg from './../assets/images/seashell.jpg'
import Button from 'material-ui/Button'
import { list, optimize } from '../solver/api-solver'
import TextField from 'material-ui/TextField'
import Table, {
    TableHead,
    TableRow, TableCell, TableBody
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


class Item extends Component {


    handleChange=(event, index)=>{
      //  this.setState({[name]:Number (event.target.value)  })
      this.props.handleResources(event,index)
      }
    render() {
        console.log('Itme, ', this.props)
        const { classes } = this.props
        return (
            <TableRow>

                <TableCell><Typography>{this.props.itemDetails.name} </Typography></TableCell>
                {
                    this.props.itemDetails.resources.map((item, index) => {
                        return (
                            <TableCell><TextField placeholder="Quantitiy" type="number" value={0} onChange={(event)=>{this.handleChange(event,index)}} />  </TableCell>

                        )
                    })
                }
            </TableRow>
        )
    }
}

Item.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Item)

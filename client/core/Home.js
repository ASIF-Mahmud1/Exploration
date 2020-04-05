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
    constrain_wood: 0,
    constrain_labor: 0,
    constrain_storage: 0,
    
    table_wood :0,
    table_labor:0,
    table_profit: 0,
    table_storage:0,

    dresser_wood :0,
    dresser_labor:0,
    dresser_profit:0,
    dresser_storage:0

  }
  clickSubmit = () => {
    //////////////////////////////////////////////////////////////////

  let   furniture = {
      "optimize": "profit",
      "opType": "max",
      "constraints": {
          "wood": {"max": this.state.constrain_wood},  // 300
          "labor": {"max": this.state.constrain_labor},  // 110
          "storage": {"max": this.state.constrain_storage} //400
      },
      "variables": {
          "table": {"wood": this.state.table_wood, "labor": this.state.table_labor, "profit": this.state.table_profit, "table": 1, "storage": 30},   // {"wood": 30, "labor": 5, "profit": 1200, "table": 1, "storage": 30}
          "dresser": {"wood": this.state.dresser_wood, "labor": this.state.dresser_labor, "profit": this.state.dresser_profit, "dresser": 1, "storage": 50} //  {"wood": 20, "labor": 10, "profit": 1600, "dresser": 1, "storage": 50}
      },
      "ints": {"table": 1, "dresser": 1}
  }
  console.log(furniture)
    ///////////////////////////////////////////////////////////////
    optimize({furniture}).then((data) => {
      if (data.error) {
        console.log("Gotta error")
      }
      else {
        console.log("All Guuci ", data)

      }
    })
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  render() {
    const { classes } = this.props
    return (

      <div>
        
        <Table>
         <TableHead>
              <TableCell>Item</TableCell>
              <TableCell>Wood</TableCell>
              <TableCell>Labor</TableCell>
              <TableCell>Profit</TableCell>
              <TableCell>Storage</TableCell>
         </TableHead>
         <TableBody> 
         <TableRow>
         <TableCell><Typography>Dresser </Typography></TableCell> 
         <TableCell><TextField placeholder="Quantitiy" type="number"  value={this.state.dresser_wood} onChange={this.handleChange('dresser_wood')}/>  </TableCell>
         <TableCell><TextField placeholder="Quantitiy" type="number" value={this.state.dresser_labor} onChange={this.handleChange('dresser_labor')} />  </TableCell>
         <TableCell><TextField placeholder="Quantitiy" type="number" value={this.state.dresser_profit} onChange={this.handleChange('dresser_profit')}/>  </TableCell>
         <TableCell><TextField placeholder="Quantitiy" type="number" value={this.state.dresser_storage} onChange={this.handleChange('dresser_storage')}/>  </TableCell>

           </TableRow>
           <TableRow>
         <TableCell><Typography>Table </Typography></TableCell>
         <TableCell><TextField placeholder="Quantitiy" type="number" value={this.state.table_wood} onChange={this.handleChange('table_wood')} />  </TableCell>
         <TableCell><TextField placeholder="Quantitiy" type="number" value={this.state.table_labor} onChange={this.handleChange('table_labor')}/>  </TableCell>
         <TableCell><TextField placeholder="Quantitiy" type="number" value={this.state.table_profit} onChange={this.handleChange('table_profit')}/>  </TableCell>
         <TableCell><TextField placeholder="Quantitiy" type="number" value={this.state.table_storage} onChange={this.handleChange('table_storage')}/>  </TableCell>

           </TableRow>
         </TableBody>
         
        </Table>
       <Table>
       <Typography type="body1" component="p">
          Welcome to the MERN Skeleton home page.
            </Typography>

        <TextField id="wood" label="Wood" className={classes.textField} value={this.state.constrain_wood} onChange={this.handleChange('constrain_wood')} margin="normal" /><br />
        <TextField id="labor" label="Labor" className={classes.textField} value={this.state.constrain_labor} onChange={this.handleChange('constrain_labor')} margin="normal" /><br />
        <TextField id="storage" label="Storage" className={classes.textField} value={this.state.constrain_storage} onChange={this.handleChange('constrain_storage')} margin="normal" /><br />
        <CardActions>
          <Button color="primary" variant="raised" onClick={this.clickSubmit} className={classes.submit}>Get Me Mah Calculationz</Button>
        </CardActions>
       </Table>
</div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)

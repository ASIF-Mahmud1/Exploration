import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardActions, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import seashellImg from './../assets/images/seashell.jpg'
import Button from 'material-ui/Button'
import { list } from '../solver/api-solver'
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

    dress_wood :0,
    dress_labor:0,
    dress_profit:0

  }
  clickSubmit = () => {
    list().then((data) => {
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
         <TableCell><TextField placeholder="Quzntitiy" />  </TableCell>
         <TableCell><TextField placeholder="Quzntitiy" />  </TableCell>
         <TableCell><TextField placeholder="Quzntitiy" />  </TableCell>
         <TableCell><TextField placeholder="Quzntitiy" />  </TableCell>

           </TableRow>
           <TableRow>
         <TableCell><Typography>Table </Typography></TableCell>
         <TableCell><TextField placeholder="Quzntitiy" />  </TableCell>
         <TableCell><TextField placeholder="Quzntitiy" />  </TableCell>
         <TableCell><TextField placeholder="Quzntitiy" />  </TableCell>
         <TableCell><TextField placeholder="Quzntitiy" />  </TableCell>

           </TableRow>
         </TableBody>
         
        </Table>
       <Table>
       <Typography type="body1" component="p">
          Welcome to the MERN Skeleton home page.
            </Typography>

        <TextField id="wood" label="Wood" className={classes.textField} value={this.state.wood} onChange={this.handleChange('wood')} margin="normal" /><br />
        <TextField id="labor" label="Labor" className={classes.textField} value={this.state.labor} onChange={this.handleChange('labor')} margin="normal" /><br />
        <TextField id="storage" label="Storage" className={classes.textField} value={this.state.storage} onChange={this.handleChange('storage')} margin="normal" /><br />
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

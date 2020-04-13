import User from '../models/user.model'
import _ from 'lodash'
import errorHandler from './../helpers/dbErrorHandler'
import Solver from '../../node_modules/javascript-lp-solver'

const optimize = (req, res, next) => {

const  results = Solver.Solve(req.body)
res.json(results)
}

const list = (req, res) => {
    console.log(Solver)
  User.find((err, users) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(users)
  }).select('name email updated created')
}


export default {
  optimize,
  list,

}

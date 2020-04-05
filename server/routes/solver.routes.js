import express from 'express'
import solverCtrl from '../controllers/solver.controller'
const router = express.Router()

router.route('/api/solver')
  .get( solverCtrl.list)
  .post(solverCtrl.optimize)


export default router

/**
 * API version 1 routes.
 *
 * @author Maria Fredriksson
 * @version 2.0.0
 */

import express from 'express'
import { HarvestController } from './../../../controllers/api/harvest-controller.js'

export const router = express.Router()

const controller = new HarvestController()

// POST harvest
router.post('/', (req, res, next) => controller.addHarvest(req, res, next))

import express from 'express'
import { getStars } from './status/star/get.stars'
import { getStar } from './status/star/get.star'
import { postStar } from './status/star/post.star'
import { postConstellation } from './status/constellation/post.constellation'
import { getConstellation } from './status/constellation/get.constellation'
import { getConstellations } from './status/constellation/get.constellations'
import { deleteStar } from './status/star/delete.star'
import { deleteConstellation } from './status/constellation/delete.constellation'
import { editStar } from './status/star/put.star'
import { updateConstellation } from './status/constellation/put.constellation'

const router = express.Router()

router.use((req, res, next) => {
    console.log('Time', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.send('Example home page')
})

router.get('/api/star/:id', getStar)
router.post('/api/star', postStar)
router.get('/api/star', getStars)
router.delete('/api/star/:id', deleteStar)
router.put('/api/star', editStar)

router.post('/api/constellation', postConstellation)
router.get('/api/constellation/:id', getConstellation)
router.get('/api/constellation', getConstellations)
router.delete('/api/constellation/:id', deleteConstellation)
router.put('/api/constellation', updateConstellation)

export default router
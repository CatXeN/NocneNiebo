import { RequestHandler } from 'express'
import { prisma } from '../../../database'
import { StatusCodes } from 'http-status-codes'


export const getStar: RequestHandler = async (req, res) => {
    const id  = req.params.id

    try {
        const star = await prisma.star.findUnique({
            where: {
                id: id
            }
        })

        res.status(StatusCodes.OK)
        res.send({...star})
    } catch (err) {
    }
}
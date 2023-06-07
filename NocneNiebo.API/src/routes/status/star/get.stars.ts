import { RequestHandler } from 'express'
import { prisma } from '../../../database'
import { StatusCodes } from 'http-status-codes'

export const getStars: RequestHandler = async (req, res) => {
    const stars = await prisma.star.findMany();

    res.status(StatusCodes.OK)
    res.send(stars)
}
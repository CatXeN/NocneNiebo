import { RequestHandler } from 'express'
import { prisma } from '../../../database'
import { StatusCodes } from 'http-status-codes'
import { v4 } from 'uuid'
import { checkPrismaError } from '../../../utils'


export const postStar: RequestHandler = async (req, res) => {
    const { name, description, constelationId } = req.body

    try {
        const createdStar = await prisma.star.create({
            data: {
                id: v4(),
                name,
                description,
                constelationId
            }
        })

        res.status(StatusCodes.CREATED)
        res.send({...createdStar})
    } catch (err) {
        console.error(err)
        const response = checkPrismaError(err, {
            uniqueConstraintFailed: 'x'
        })

        res.status(response.status)
        res.send(response.message)
    }
}
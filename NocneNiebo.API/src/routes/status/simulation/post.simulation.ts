import { RequestHandler } from "express";
import { prisma } from "../../../database";
import { StatusCodes } from "http-status-codes";

export const updateSimulation: RequestHandler = async (req,res) => {
    const { date, cloudliness, moonPhase, rain } = req.body

    try {
        await prisma.simulation.updateMany({
            where: {
                key: 'date'
            },
            data: {
                value: date
            }
        })

        await prisma.simulation.updateMany({
            where: {
                key: 'cloudliness'
            },
            data: {
                value: cloudliness.toString()
            }
        })

        await prisma.simulation.updateMany({
            where: {
                key: 'moonPhase'
            },
            data: {
                value: moonPhase.toString()
            }
        })

        await prisma.simulation.updateMany({
            where: {
                key: 'rain'
            },
            data: {
                value: rain.toString()
            }
        })

        res.status(StatusCodes.OK)
        res.send({message: "Updated"})
    } catch (error) {
        console.error(error)
    }
}
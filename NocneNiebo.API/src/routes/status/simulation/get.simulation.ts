import { RequestHandler } from "express";
import { prisma } from "../../../database";
import { StatusCodes } from "http-status-codes";

export const getSimulation: RequestHandler = async (req,res) => {
    try {
        const settings = await prisma.simulation.findMany();
        res.status(StatusCodes.OK)
        res.send(settings)
    } catch (error) {
        console.error(error)
    }
}
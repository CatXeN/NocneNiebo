import { RequestHandler } from "express";
import { prisma } from "../../../database";
import { StatusCodes } from "http-status-codes";

export const getConstellations: RequestHandler = async (req, res) => {
    try {
        const constellations = await prisma.constellation.findMany()

        res.status(StatusCodes.OK)
        res.send({...constellations})
    }
    catch(err) {
        console.log(err)
    }
}
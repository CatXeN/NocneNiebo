import { RequestHandler } from "express";
import { prisma } from "../../../database";
import { v4 } from "uuid";
import { StatusCodes } from "http-status-codes";

export const postConstellation: RequestHandler = async(req, res) => {
    const { name, description } = req.body

    try {
        const constellation = await prisma.constellation.create({
            data: {
                id: v4(),
                name,
                description
            }
        })

        res.status(StatusCodes.CREATED)
        res.send({...constellation})
    }
    catch (err) {

    }
}
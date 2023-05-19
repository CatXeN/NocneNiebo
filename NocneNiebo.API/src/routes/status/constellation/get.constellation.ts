import { RequestHandler } from "express";
import { prisma } from "../../../database";
import { StatusCodes } from "http-status-codes";

export const getConstellation: RequestHandler = async (req, res) => {
    const id = req.params.id

    try {
        const constellation = await prisma.constellation.findUnique({
            where: {
                id: id
            },
            include: {
                stars: true
            }
        })

        res.status(StatusCodes.OK)
        res.send({...constellation})
    }
    catch(err) {
        console.log(err)
    }
}
import { RequestHandler } from "express";
import { prisma } from "../../../database";
import { StatusCodes } from "http-status-codes";

export const deleteConstellation: RequestHandler = async (req, res) => {
    const id = req.params.id

    try {
        const deletedStar = await prisma.constellation.delete({
            where: {
                id: id
            }
        })

        res.status(StatusCodes.OK)
        res.send({...deletedStar})
    } catch (err) {
        
    }
}
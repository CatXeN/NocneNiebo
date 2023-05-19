import { RequestHandler } from "express";
import { prisma } from "../../../database";
import { StatusCodes } from "http-status-codes";

export const deleteStar: RequestHandler = async (req, res) => {
    const id = req.params.id
    
    try {
        const deletedStar = await prisma.star.delete({
            where: {
                id: id
            }
        })

        res.status(StatusCodes.OK);
        res.send({...deletedStar})
    } catch (err) {
        
    }
}
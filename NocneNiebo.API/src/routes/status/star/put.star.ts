import { RequestHandler } from "express";
import { prisma } from "../../../database";
import { StatusCodes } from "http-status-codes";

export const editStar: RequestHandler = async (req, res) => {
    const { id, name, description } = req.body

    try {
        const updatedStar = await prisma.star.update({
            where: {
                id: id
            },
            data: {
                name: name,
                description: description
            }
        })

        res.status(StatusCodes.OK)
        res.send({...updatedStar})
    }
    catch (err) {
        
    }
}
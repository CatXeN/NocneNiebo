import { RequestHandler } from "express";
import { prisma } from "../../../database";
import { StatusCodes } from "http-status-codes";

export const updateConstellation: RequestHandler = async(req, res) => {
    const { id, name, description} = req.body

    try {
        const updatedConstellation = await prisma.constellation.update({
            where: {
                id: id
            },
            data: {
                name: name,
                description: description
            }
        })

        res.status(StatusCodes.OK)
        res.send({...updatedConstellation})
    } catch (err) {
        res.send(err)
    }
}
import crypto from 'crypto'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { StatusCodes, ReasonPhrases } from 'http-status-codes'

const createHash = (data: string, salt: string) => {
    const hash = crypto.createHmac('sha512', salt)
    hash.update(data)
    return hash.digest('hex')
}

export const checkHash = (
    data: string,
    hash: string,
    salt: string,
): boolean => {
    return createHash(data, salt) === hash
}

export type PrismaErrorDescriptions = {
    uniqueConstraintFailed?: string
}

export type PrismaErrorResponse = {
    status: number
    message: string
}

const getPrismaErrorResponse = (message?: string): PrismaErrorResponse => {
    return {
        status: StatusCodes.BAD_REQUEST,
        message: message ?? ReasonPhrases.BAD_REQUEST
    }
}

export const checkPrismaError = (
    err: unknown,
    messages: PrismaErrorDescriptions,
): PrismaErrorResponse => {
    const response = {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: ReasonPhrases.INTERNAL_SERVER_ERROR
    }

    if (err instanceof PrismaClientKnownRequestError) {
        const code = err.code

        switch (code) {
            case 'P2002':
                return getPrismaErrorResponse(messages.uniqueConstraintFailed)
        }
    }

    return response
}
import { ServerConfig } from './server'

export type Env = 'production' | 'test' | 'development'

export type Config = {
    env: Env
    server: ServerConfig
}

const env = (process.env.NODE_ENV || 'production') as Env
const API_PORT = 5200

export const config: Config = {
    env,
    server: {
        port: API_PORT,
        corsOptions: 
            env === 'development' ? { origin: 'localhost' + API_PORT } : {},
        limiter: {
            time: 15 * 60 * 1000,
            max: 250
        }
    }
}
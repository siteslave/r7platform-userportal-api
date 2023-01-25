import * as jsonwebtoken from 'jsonwebtoken';
import { AxiosInstance } from 'axios';
import Knex from 'knex';

declare module 'fastify' {
  interface FastifyInstance {
    jwt: jsonwebtoken
    authenticate: any
    db: Knex
  }

  interface FastifyRequest {
    jwtVerify: any
    user: any
  }

}

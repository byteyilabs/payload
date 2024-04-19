import type { Destroy } from 'payload/database'

import mongoose from 'mongoose'

import type { MongooseAdapter } from './index'

export const destroy: Destroy = async function destroy(this: MongooseAdapter) {
  if (this.mongoMemoryServer) {
    await this.connection.dropDatabase()
    await this.connection.close()
    await this.mongoMemoryServer.stop()
  } else {
    await this.connection.close()
  }
}

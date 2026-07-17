import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB || 'linkedin_leads'

if (!uri) {
  throw new Error('Missing MONGODB_URI environment variable')
}

// Cache the connection across hot reloads in dev so we don't open a new
// connection pool on every file change.
let clientPromise

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  clientPromise = new MongoClient(uri).connect()
}

export async function getDb() {
  const client = await clientPromise
  return client.db(dbName)
}

export async function getLeadsCollection() {
  const db = await getDb()
  return db.collection('leads')
}

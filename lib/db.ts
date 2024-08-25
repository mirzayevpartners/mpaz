// import mongoose from 'mongoose';
//
// const MONGODB_URI = process.env.MONGO_URI;
//
// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }
//
// let cached = global.mongoose;
//
// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }
//
// async function dbConnect() {
//   if (cached.conn) {
//     console.log('Cached Db Connected');
//     return cached.conn;
//   }
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };
//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       console.log('Db connected');
//       return mongoose;
//     });
//   }
//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     console.log(e);
//     cached.promise = null;
//     throw e;
//   }
//
//   return cached.conn;
// }
//
// export default dbConnect;
// Importing mongoose library along with Connection type from it
import mongoose, { Connection } from 'mongoose';
let cachedConnection: Connection | null = null;
export default async function dbConnect() {
  // If a cached connection exists, return it
  if (cachedConnection) {
    // console.log('Using cached db connection');
    return cachedConnection;
  }
  try {
    const cnx = await mongoose.connect(process.env.MONGO_URI!, { serverSelectionTimeoutMS: 5000 });
    cachedConnection = cnx.connection;
    // console.log('New mongodb connection established');
    return cachedConnection;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

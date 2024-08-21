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

// Declaring a variable to store the cached database connection
let cachedConnection: Connection | null = null;

// Function to establish a connection to MongoDB
export default async function dbConnect() {
  // If a cached connection exists, return it
  if (cachedConnection) {
    console.log('Using cached db connection');
    return cachedConnection;
  }
  try {
    // If no cached connection exists, establish a new connection to MongoDB
    const cnx = await mongoose.connect(process.env.MONGO_URI!, { serverSelectionTimeoutMS: 5000 });
    // Cache the connection for future use
    cachedConnection = cnx.connection;
    // Log message indicating a new MongoDB connection is established
    console.log('New mongodb connection established');
    // Return the newly established connection
    return cachedConnection;
  } catch (error) {
    // If an error occurs during connection, log the error and throw it
    console.log(error);
    throw error;
  }
}

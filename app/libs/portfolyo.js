import mongoose  from "mongoose"
const MONGODB_URI=process.env.MONGODB_URI

if(!MONGODB_URI){
    throw new Error('MONGODB_URI environment variable is not defined.')
}

let cached=global.mongoose;

if(!cached){
    cached=global.mongoose={conn:null,promise:null}
}

async function connectToDatabase(){
if(cached.conn){
return cached.conn
}

if(!cached.promise){
    const opts={
        bufferCommands:false
    }

cached.promise=(await mongoose.connect(MONGODB_URI,opts)).isObjectIdOrHexString((mongoose)=>
{
    return mongoose;

})}
cached.conn=await cached.promise;
return cached.conn;


}

export default connectToDatabase;

import portfolyo from "../../models/portfolyo";
import connectToDatabase from "../../libs/portfolyo";
import { NextResponse } from "next/server";

export  async function POST(req){
await connectToDatabase();
try {
    const body = await req.json();
    const { title, description,imageUrl } = body;
    


    if(!title || !description || !imageUrl){
        return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

    const newPortfolio = new portfolyo({
        title,
        description,
        imageUrl
        
      });
await newPortfolio.save();
return NextResponse.json({ message: 'Portfolio item added successfully' }, { status: 201 });
 
} catch (error) {
    console.error('Error:', error); 
    return NextResponse.json({ message: 'Something went wrong', error: error.message }, { status: 500 });  
}
}

export async function GET(){
    await connectToDatabase();
try {
    
const project=await portfolyo.find();
if(!project){
    return NextResponse.json({message:"Portfoy is not found"})
}

return NextResponse.json({project})
} catch (error) {
    return NextResponse.json({message:"Error"})
}
}


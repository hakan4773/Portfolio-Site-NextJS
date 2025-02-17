import portfolyo from "../../models/portfolyo";
import connectToDatabase from "../../libs/portfolyo";
import { NextResponse } from "next/server";
import { FaCloudShowersWater } from "react-icons/fa6";

export  async function POST(req){
await connectToDatabase();
try {
    const body = await req.json();
    const { title,technologies, description,imageUrl } = body;
    


    if(!title || !technologies || !description || !imageUrl){
        return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

    const newPortfolio = new portfolyo({
        title,
        technologies,
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

export async function PUT(req,{params}) {
  const body=await req.json();
  const {title,technologies,description,imageUrl}=body;
  const id = req.nextUrl.searchParams.get('id');
  if (!id) {
    return NextResponse.json({ message: 'ID is required' }, { status: 400 });
  }

    try{
       const updateProjects= await portfolyo.findByIdAndUpdate({_id: new Object(id) }, 
        
             { title, technologies, description, imageUrl },
    {new:true})
       
    if (!updateProjects) {
        return NextResponse.json({ message: 'Project not found' }, { status: 404 });
      }
       return NextResponse.json({message:"Projects update success",updateProjects},{status:201})


    } catch (error) {
       return NextResponse.json({error:error.message},{status:501})
        
    }

}
import portfolyo from "../../models/portfolyo";
import connectToDatabase from "../../libs/portfolyo";
import { NextResponse } from "next/server";

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
    
const project=await portfolyo.find().sort("-createdAt");
 if (!project || project.length === 0) {
      return NextResponse.json(
        { message: 'No portfolio items found' },
        { status: 404 }
      );
    }

return NextResponse.json({project})
} catch (error) {
    return NextResponse.json({message:"Error"})
}
}

export async function PUT(req) {
  const body = await req.json();
  const { title, technologies, description, imageUrl } = body;
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
  }

  try {
    const updateProjects = await portfolyo.findByIdAndUpdate(
      { _id: new Object(id) },

      { title, technologies, description, imageUrl },
      { new: true, runValidators: true }
    );

    if (!updateProjects) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Projects update success", updateProjects },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 501 });
  }
}
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: 'Invalid ID format' },
        { status: 400 }
      );
    }

    const deletedProject = await portfolyo.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json(
        { message: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Project deleted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 }
    );
  }
}
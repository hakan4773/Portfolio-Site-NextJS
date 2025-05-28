import connectToDatabase from "../../libs/portfolyo";
import { NextResponse } from "next/server";
import  Contact  from "../../models/Contact";
export  async function POST(req) {
await connectToDatabase();
try {
    const body = await req.json();
    const { name,email, message } = body;
        if(!name || !email || !message){
        return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }
    const newContact = new Contact({
        name,
        email,
        message
        });
    await newContact.save();
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });

}
 catch (error) {
    console.error('Error:', error); 
    return NextResponse.json({ message: 'Something went wrong', error: error.message }, { status: 500 });  
  }

}
import connectToDatabase from "../../libs/portfolyo";
import { NextResponse } from "next/server";
import Certificate from "@/app/models/Certificate";

export async function POST(req) {

    await connectToDatabase();
    try {
        const body = await req.json();
        const { title, description, imageUrl, link } = body;

        if (!title || !description || !imageUrl) {
            return NextResponse.json({ message: 'Title, description, and image URL are required' }, { status: 400 });
        }
        

        const newCertificate = new Certificate({
            title,
            description,
            imageUrl,
            link
        });

        await newCertificate.save();
        return NextResponse.json({ message: 'Certificate created successfully' }, { status: 201 });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: 'Something went wrong', error: error.message }, { status: 500 });
    }
}
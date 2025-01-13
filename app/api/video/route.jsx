import { db } from "../../../configs/db";
import { USER_TABLE, VIDEO_RAW_TABLE } from "../../../configs/schema";
import { desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {

    const { videoId, userEmail } = await req.json();
    const user = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email,userEmail));
    const updatedCredits=user[0].credits-2;
    await db.update(USER_TABLE).set({
        credits: updatedCredits
    }).where(eq(USER_TABLE.email,userEmail)).returning(USER_TABLE);
    const result = await db.insert(VIDEO_RAW_TABLE).values({
        videoId: videoId,
        createdBy: userEmail
    }).returning(VIDEO_RAW_TABLE);

    return NextResponse.json({ result });
}

export async function PUT(req) {

    const {videoId,videoData} = await req.json();
    const result=await db.update(VIDEO_RAW_TABLE).set({
        videoData:videoData
    }).where(eq(VIDEO_RAW_TABLE.videoId,videoId)).returning(VIDEO_RAW_TABLE);

    return NextResponse.json({result});
}

export async function GET(req) {
    
    const {searchParams}=new URL(req.url);
    const videoId=searchParams.get('videoId');
    const userEmail=searchParams.get('userEmail');
    if(userEmail){
        const result=await db.select().from(VIDEO_RAW_TABLE).where(eq(VIDEO_RAW_TABLE.createdBy,userEmail)).orderBy(desc(VIDEO_RAW_TABLE.id));
        return NextResponse.json(result);
    }
    const result=await db.select().from(VIDEO_RAW_TABLE).where(eq(VIDEO_RAW_TABLE.videoId,videoId));

    return NextResponse.json(result[0]);
}

export async function DELETE(req) {
    
    const {searchParams}=new URL(req.url);
    const videoId=searchParams.get('videoId');
    await db.delete(VIDEO_RAW_TABLE).where(eq(VIDEO_RAW_TABLE.videoId,videoId));

    return NextResponse.json({result:'Video Deleted!'});
}
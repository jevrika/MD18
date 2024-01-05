import { NextResponse } from 'next/server';
import Comment, { IComment } from '../../../../lib/(models)/Comment';
import { connectToDb } from '@/src/lib/connectToDb';

export async function GET(_: any, { params }: { params: { id: string } }) {
  const id = params.id;

  try {
    await connectToDb();

    const comments = await Comment.find({ blogId: id }).sort({ createdAt: -1 });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Error ${error}` }, { status: 500 });
  }
}

export async function DELETE(_: any, { params }: { params: { id: string } }) {
  const  id  = params.id;
    try {
      await connectToDb();
  
      await Comment.findByIdAndDelete({_id: id});
  
      return NextResponse.json({ message: "Comment Deleted" }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  }
  
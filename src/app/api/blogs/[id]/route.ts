import Blog from '@/src/lib/(models)/Blog';
import Comment from '@/src/lib/(models)/Comment';
import { connectToDb } from '@/src/lib/connectToDb';
import { NextResponse } from 'next/server';

export async function GET(_: any, { params }: { params: { id: string } }) {
  const id = params.id;
  try {

    await connectToDb();

    const blog = await Blog.findOne({ _id: id })

    return NextResponse.json( blog, { status: 200 });

  } catch (error) {

    return NextResponse.json({ message: `Error ${error}` }, { status: 500 });

  }
}


export async function DELETE(_: any, { params }: { params: { id: string } }) {
  const id = params.id;
  try {
    await connectToDb();

    await Comment.deleteMany({ blogId: id });

    await Blog.findByIdAndDelete({ _id: id });

    return NextResponse.json({ message: 'Blog and blog comments deleted' }, { status: 200 });

  } catch (error) {

    console.log(error);

    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function PUT(request: { json: () => any }, { params }: { params: { id: string } }) {
  const id = params.id;
  const body = await request.json();
  
  try {
    await connectToDb();

    await Blog.findOneAndUpdate({ _id: id }, body);

    return NextResponse.json({ message: 'Blog updated' }, { status: 200 });
    
  } catch (error) {

    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
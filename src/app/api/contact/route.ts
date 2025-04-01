import mongoose, { Schema, Document, models, model } from 'mongoose'
import { NextResponse } from 'next/server';
const mongoUrl =
process.env.NEXT_PUBLIC_MONGO_URI as string;
 
  let cached = (global as any).mongoose || {conn: null, promise: null};
//connection 
  async function connecttodatabase(): Promise<typeof mongoose>{
if (cached.conn)
{
    return cached.conn;
  }if(!cached.promise)
  {
    cached.promise = mongoose.connect(mongoUrl)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

interface IItem extends Document{
    name: string;
    email: string;
    message: string;
}
const itemSchema = new Schema<IItem>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    }, {timestamps:true});
    const Item= models.Item || model<IItem>("Item", itemSchema);
export async function POST(request: Request) {
    await connecttodatabase();
    const {name, email, message} = await request.json();
    const newItem = new Item({name, email, message});
    await newItem.save();
    return NextResponse.json({message:newItem});
}
export async function GET() {
    await connecttodatabase();
    const items = await Item.find({});
    return NextResponse.json(items);
}
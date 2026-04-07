import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;
  const db = await clientPromise;
  const collection = db.db("url_shortener").collection("short_links");
  const result = await collection.findOne({ alias });
  if (!result) {
    return <div>URL not found</div>;
  }
  return redirect(result.url);
  return <div>My Post: {alias}</div>;
}

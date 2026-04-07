import clientPromise from "@/lib/mongodb";
import { validateAlias, validateUrl } from "@/lib/validations";

export async function POST(request: Request) {
  const { url, alias } = await request.json();
  if (!validateUrl(url)) {
    return Response.json({ message: "Invalid URL" }, { status: 400 });
  }
  if (!validateAlias(alias)) {
    return Response.json({ message: "Invalid Alias" }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("url_shortener");
  const collection = db.collection("short_links");

  const existingAlias = await collection.findOne({ alias });
  if (existingAlias) {
    return Response.json({ message: "Alias already exists" }, { status: 400 });
  }

  const result = await collection.insertOne({
    url,
    alias,
    shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/${alias}`,
    createdAt: new Date(),
  });
  console.log(result);
  return Response.json({ message: "URL shortened", url, alias });
}

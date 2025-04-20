import getCollection, { POSTS_COLLECTION } from "@/db";
import { UrlProps } from "@/types";
import { ObjectId } from "mongodb";

export default async function getURLById(
    id: string,
): Promise<UrlProps | null> {
    const urlId = ObjectId.createFromHexString(id);

    const postsCollection = await getCollection(POSTS_COLLECTION);
    const data = await postsCollection.findOne({ _id: urlId });

    if (data === null) {
        return null;
    }

    const u = {
        id: id,
        url: data.url,
        alias: data.alias,
        shortUrl: data.shortUrl
    };

    return u;
}

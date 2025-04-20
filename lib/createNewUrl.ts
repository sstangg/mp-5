"use server";
import getCollection, { POSTS_COLLECTION } from "@/db";
import { UrlProps } from "@/types";

export default async function createNewUrl(
    url: string,
    alias: string,
    shortUrl: string
): Promise<UrlProps> {
    const p = {
        url: url,
        alias: alias,
        shortUrl: shortUrl
    };

    const postsCollection = await getCollection(POSTS_COLLECTION);
    const a = await postsCollection.findOne({ alias: p.alias })
    if ( a !== null) {
        throw new Error("Alias already taken");
    }


    const res = await postsCollection.insertOne({ ...p });

    if (!res.acknowledged) {
        throw new Error("DB insert failed");
    }

    return { ...p, id: res.insertedId.toHexString() };
}
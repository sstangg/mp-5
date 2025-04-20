import getPostById from "@/lib/getPostById";
import { redirect } from "next/navigation";

export default async function FullPostPage({
                                               params,
                                           }: {
    params: Promise<{ id: string}>;
}) {
    const { id } = await params;

    try {
        const post = await getPostById(id);
        if (post === null) {
            return redirect("/");
        }
        console.log("we tried", post, post.url);
        return redirect(post.url);
    } catch (err) {
        console.error(err);
        return redirect("/");
    }
}

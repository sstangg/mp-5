import { UrlProps } from "@/types";
import Link from "next/link";

export default function URLPreview({ url }: { url: UrlProps }) {
    return (
        <div className="bg-sky-400 rounded-xl p-4 m-2 w-5/6">
            <Link href={`/${url.alias}`}>{url.shortUrl}</Link>
        </div>
    );
}

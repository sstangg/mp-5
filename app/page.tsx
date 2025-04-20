"use client"
import { UrlProps } from "@/types";
import URLForm from "./components/URLForm"
import {useState} from "react";
import URLPreview from "@/app/components/URLPreview";

export default function Home() {
    const [urls, setUrls] = useState<UrlProps[]>([]);

    function append(newPost: UrlProps) {
        setUrls([...urls, newPost]);
    }

    return (
        <div className="flex flex-col items-center bg-blue-950 p-4">
            <h2>URL Shortener</h2>
            <h3>Shorten your long URLs into compact, shareable links</h3>
            <div className="w-2/3 flex flex-col items-center bg-purple-50 p-4">
                <h2 className="text-black">Shorten a URL</h2>
                <h3 className="text-black">Enter a long URL to create a shorter, shareable link</h3>
                <URLForm append={append}/>
                {urls.map((p) => (
                    <URLPreview key={p.id} url={p} />
                ))}
            </div>
        </div>
    );
}

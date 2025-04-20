"use client"
import { Button, FormHelperText, TextField } from "@mui/material";
import { useState } from "react";
import { UrlProps } from "@/types";
import createNewUrl from "@/lib/createNewUrl";
export default function URLForm({
                                    append,
                                }: {
    append: (newUrl: UrlProps) => void;
}) {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [error, setError] = useState("");
    return (
        <form
            className="w-6/7 rounded-xl p-4"
            onSubmit={(e) => {
                e.preventDefault();
                setError("");
                createNewUrl(url, alias, `https://mp-5-sst-cs391-url-shortener.vercel.app/${alias}`)
                    .then((p) => append(p))
                    .catch((err) => {
                        console.error(err)
                        if (err.message === "Alias already taken"){
                            setError("That alias is already taken. Try a different one!");
                        }
                        else {
                            setError("Something went wrong. Please try again.");
                        }
                    })
            }}
        >
            <FormHelperText>URL</FormHelperText>
            <TextField
                variant="filled"
                sx={{ backgroundColor: "white", width: "100%" }}
                value={url}
                placeholder="https://example.com/very/long/url"
                onChange={(e) => setUrl(e.target.value)}
            />
            <FormHelperText>Custom Alias</FormHelperText>
            <div className="flex m-4">
                <FormHelperText className="w-full">https://mp-5-sst-cs391-url-shortener.vercel.app/</FormHelperText>
                <TextField
                    variant="filled"
                    sx={{ backgroundColor: "white", width: "100%" }}
                    value={alias}
                    placeholder="your-custom-alias"
                    onChange={(e) => setAlias(e.target.value)}
                />
            </div>
            <FormHelperText>{error}</FormHelperText>
            <div className="w-full flex justify-center">
                <Button type="submit" variant="contained" sx={{ width: "100%" }}>
                    Shorten
                </Button>
            </div>

        </form>
    );
}

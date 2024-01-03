"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNote() {
  const [tittle, setTittle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();
  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tittle,
        content,
      }),
    });

    setTittle("");
    setContent("");
    router.refresh();
  };

  return (
    <form
      onSubmit={create}
      className="flex flex-col justify-center items-center"
    >
      <h3 className="text-2xl font-semibold">Create Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={tittle}
        onChange={(e) => setTittle(e.target.value)}
        className="w-1/4 m-2 p-2 bg-transparent border-2 rounded-md"
      />
      <textarea
        placeholder="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-1/4 m-2 p-2 bg-transparent border-2 rounded-md"
      />
      <button
        type="submit"
        className="m-2 p-2 rounded-lg border-2 border-teal-500"
      >
        Create Note
      </button>
    </form>
  );
}

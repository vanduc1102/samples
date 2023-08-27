import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Link from "next/link";

export default function nextPage() {
    const [paragraph, setParagraph] = useState("");
    useEffect(() => {
        setParagraph(faker.lorem.sentences(2));
    }, []);

    return (
        <>
            <h1>Learn NextJS</h1>
            <p>{paragraph}</p>
            <Link href="/hello">To Hello Page</Link>
        </>
    );
}

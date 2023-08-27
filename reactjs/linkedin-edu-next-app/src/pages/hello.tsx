import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Link from 'next/link';


export default function helloPage() {
    const [paragraph, setParagraph] = useState("");
    useEffect(() => {
        setParagraph(faker.lorem.sentences(2));
    }, []);

    return (
        <>
            <h1>Learn NextJS</h1>
            <Link href="/learn/next">
                To Learn NextJS
            </Link>
            <ul>
            {
                ['angular','vuejs','reactjs'].map((course,idx)=>(
                    <Link href={"/courses/"+ course} key={idx} >
                        <li><b>{course }</b></li>
                    </Link>
                ))
            }
            </ul>
            <p>{paragraph}</p>
        </>
    );
}

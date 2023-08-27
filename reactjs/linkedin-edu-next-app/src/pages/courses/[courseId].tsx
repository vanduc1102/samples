import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CoursePage() {
    const router = useRouter();
    return (
        <>
            <h1>Course Detail Page</h1>
            <h1>{router.query.courseId}</h1>
            <Link href="/hello">Back to Hello World</Link>
        </>
    );
}

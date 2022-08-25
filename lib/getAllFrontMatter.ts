import { readFileSync } from "fs";
import { join } from "path";
import { getFiles } from "./getFiles";
import matter from "gray-matter";

export const getAllFrontMatter = async (type: string) => {
    const files = await getFiles(type);

    return files.reduce((allPosts: any, postSlug: any) => {
        const source = readFileSync(
            join(process.cwd(), "data", type, postSlug),
            "utf8"
        );
        const { data } = matter(source);
        return [
            {
                ...data,
                slug: postSlug.replace(".mdx", ""),
            },
            ...allPosts,
        ];
    }, []);
};

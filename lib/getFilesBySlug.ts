import { readFileSync } from "fs";
import { bundleMDX } from "mdx-bundler";
import { join } from "path";
import rehypePrism from "rehype-prism-plus";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";

export const getFilesBySlug = async (type: string, slug: string) => {
    const source = readFileSync(
        join(process.cwd(), "data", type, `${slug}.mdx`),
        "utf8"
    );

    const { code, frontmatter } = await bundleMDX(source, {
        xdmOptions(options) {
            options.remarkPlugins = [
                ...(options.remarkPlugins ?? []),
                remarkGfm,
            ];
            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                rehypePrism,
            ];
            return options;
        },
    });
    return {
        code,
        frontmatter: {
            readingTime: readingTime(source),
            ...frontmatter,
        },
    };
};

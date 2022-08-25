import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import BlogLayout from "../../layouts/BlogLayout";
import { VStack, Heading, Text, Stack } from "@chakra-ui/react";
import { getFiles } from "../../lib/getFiles";
import { getFilesBySlug } from "../../lib/getFilesBySlug";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import MDXComponents from "../../components/MDXComponents";

const Blog: NextPage = ({ code, frontmatter }: any) => {
    const Component = useMemo(() => getMDXComponent(code), [code]);
    return (
        <BlogLayout>
            <VStack alignItems="flex-start" w="full" spacing={4}>
                <Heading size="xl">{frontmatter.title}</Heading>
                <Stack
                    justifyContent="space-between"
                    alignItems="flex-start"
                    w="full"
                    direction={{ base: "column", sm: "row" }}
                >
                    <Text>Nicklaus · {frontmatter.publishedAt}</Text>
                    <Text>
                        {frontmatter.readingTime.words} words ·{" "}
                        {frontmatter.readingTime.text}
                    </Text>
                </Stack>
                <Component components={MDXComponents} />
            </VStack>
        </BlogLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getFiles("blog");
    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.replace(/\.mdx/, ""),
            },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // @ts-ignore
    const post = await getFilesBySlug("blog", params.slug);
    return { props: { ...post } };
};

export default Blog;

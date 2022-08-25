import type { GetStaticProps, NextPage } from "next";
import FeaturedPostsCard from "../../components/FeaturedPostsCard";
import PostCard from "../../components/PostCard";
import Layout from "../../layouts";
import {
    VStack,
    Heading,
    Text,
    InputGroup,
    Input,
    InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEvent, useState } from "react";
import { PostOverview } from "../../lib/types/post-overview";
import { getAllFrontMatter } from "../../lib/getAllFrontMatter";

const Blog: NextPage = ({ posts }: any) => {
    const [searchValue, setSearchValue] = useState("");
    const filteredBlogData = posts
        .sort(
            (a: PostOverview, b: PostOverview) =>
                Number(new Date(a.publishedAt)) -
                Number(new Date(b.publishedAt))
        )
        .filter((post: PostOverview) =>
            post.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    return (
        <Layout>
            <VStack alignItems="flex-start" w="full">
                <Heading size="xl">Blog</Heading>
                <InputGroup>
                    <Input
                        aria-label="Search articles"
                        placeholder="Search articles"
                        type="text"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                    />
                    {/* eslint-disable-next-line react/no-children-prop */}
                    <InputRightElement children={<SearchIcon />} />
                </InputGroup>
            </VStack>
            {!searchValue && <FeaturedPostsCard endDiv={false} />}
            <VStack alignItems="flex-start" w="full" spacing={4}>
                <Heading size="lg" pb={4}>
                    All Posts
                </Heading>
                {filteredBlogData.length === 0 ? (
                    <Text>No posts found.</Text>
                ) : (
                    filteredBlogData.map((post: PostOverview, c = 0) => {
                        c++;
                        return (
                            <PostCard
                                key={post.title}
                                title={post.title}
                                summary={post.summary}
                                publishedAt={post.publishedAt}
                                url={post.url}
                                div={true && c !== filteredBlogData.length}
                            />
                        );
                    })
                )}
            </VStack>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllFrontMatter("blog");
    return { props: { posts } };
};

export default Blog;

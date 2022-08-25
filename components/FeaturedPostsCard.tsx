import { Heading, VStack } from "@chakra-ui/react";
import { PostOverview } from "../lib/types/post-overview";
import PostCard from "./PostCard";

const featuredPosts: PostOverview[] = [
    {
        title: "Test 1",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque, ex eu vestibulum placerat",
        publishedAt: "Oct 1, 2021",
        url: "/blog/test-1",
    },
    {
        title: "Test 2",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque, ex eu vestibulum placerat, magna dui lobortis ligula, a facilisis sem ante quis sapien nisl id accumsan eleifend risus lectus.",
        publishedAt: "Oct 2, 2021",
        url: "/blog/test-2",
    },
    {
        title: "Test 3",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque, ex eu vestibulum placerat, magna dui lobortis ligula.",
        publishedAt: "Oct 3, 2021",
        url: "/blog/test-3",
    },
];

const FeaturedPostsCard = ({ endDiv }: any) => {
    return (
        <VStack alignItems="flex-start" w="full" spacing={4}>
            <Heading size="lg" pb={4}>
                Featured Posts
            </Heading>
            {featuredPosts.map((post: PostOverview, c = 0) => {
                c++;
                return (
                    <PostCard
                        key={post.title}
                        title={post.title}
                        summary={post.summary}
                        publishedAt={post.publishedAt}
                        url={post.url}
                        div={endDiv || featuredPosts.length !== c}
                    />
                );
            })}
        </VStack>
    );
};

export default FeaturedPostsCard;

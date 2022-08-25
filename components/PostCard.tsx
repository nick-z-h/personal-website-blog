import { Stack, Link, VStack, Text, Heading, Divider } from "@chakra-ui/react";
import NextLink from "next/link";
import { PostOverview } from "../lib/types/post-overview";

const PostCard = ({
    title,
    summary,
    url,
    publishedAt,
    div = true,
}: PostOverview) => {
    return (
        <VStack alignItems="flex-start" w="full" spacing={4}>
            <NextLink href={url} passHref>
                <VStack
                    as={Link}
                    style={{ textDecoration: "none" }}
                    w="full"
                    alignItems="flex-start"
                >
                    <Stack
                        direction={{ base: "column", md: "row" }}
                        justifyContent="space-between"
                        w="full"
                        alignItems="top"
                    >
                        <Heading size="md">{title}</Heading>
                        <Text
                            fontSize="md"
                            textAlign={{ base: "right", sm: "left" }}
                            minW="100px"
                        >
                            {publishedAt}
                        </Text>
                    </Stack>
                    <Text>{summary}</Text>
                </VStack>
            </NextLink>
            {div ? <Divider /> : ""}
        </VStack>
    );
};

export default PostCard;

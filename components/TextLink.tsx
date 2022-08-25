import NextLink from "next/link";
import { Link, HStack, Text, Box } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { TextLink as TLink } from "../lib/types/text-link";

const TextLink = ({ url, desc }: TLink) => {
    return (
        <NextLink href={url} passHref>
            <HStack as={Link} style={{ textDecoration: "none" }}>
                <Text>{desc}</Text>
                <Box>
                    <ArrowForwardIcon boxSize={4} />
                </Box>
            </HStack>
        </NextLink>
    );
};

export default TextLink;

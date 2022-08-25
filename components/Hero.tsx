import { Heading, Button, HStack, Link, VStack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { Link as LinkType } from "../lib/types/link";

const socialLinks: LinkType[] = [
    {
        href: "https://www.linkedin.com/in/nicklauszhanghoule",
        label: "Linkedin",
    },
    {
        href: "https://github.com/nick-z-h",
        label: "Github",
    },
];

const Hero = () => {
    return (
        <VStack alignItems="flex-start" w="full">
            <Heading size="xl" pb={4}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Hello, I'm Nicklaus
            </Heading>
            <Text>Welcome to my personal slice of the internet!</Text>
            <HStack>
                {socialLinks.map(({ href, label }) => (
                    <NextLink key={href} href={href} passHref >
                        <Button
                            as={Link}
                            size="md"
                            target="_blank"
                            variant="ghost"
                            rightIcon={<ExternalLinkIcon />}
                            style={{ textDecoration: "none" }}
                        >
                            <Text>{label}</Text>
                        </Button>
                    </NextLink>
                ))}
            </HStack>
        </VStack>
    );
};

export default Hero;

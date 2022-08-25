import { Stack, Link, Text, VStack, Divider } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Link as LinkType } from "../lib/types/link";
import CurrentlyPlaying from "./CurrentlyPlaying";

const footerLinksFirst: LinkType[] = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/blog",
        label: "Blog",
    },
];

const footerLinksSecond: LinkType[] = [
    {
        href: "/resume",
        label: "Resume",
    },
    {
        href: "https://www.linkedin.com/in/nicklauszhanghoule",
        label: "Linkedin",
    },
];

const footerLinksThird: LinkType[] = [
    {
        href: "https://github.com/nick-z-h",
        label: "Github",
    },
];

const Footer = () => {
    const { pathname } = useRouter();
    return (
        <VStack as="footer" spacing={8} pb={8} px={4}>
            <Divider />
            <CurrentlyPlaying />
            <Stack
                direction={{ base: "column", sm: "row" }}
                justifyContent="space-between"
                w="full"
            >
                <VStack alignItems="flex-start">
                    {footerLinksFirst.map(({ href, label }) => (
                        <NextLink key={href} href={href} passHref>
                            <Link style={{ textDecoration: "none" }}>
                                {pathname === href ? (
                                    <Text fontWeight="bold">{label}</Text>
                                ) : (
                                    <Text>{label}</Text>
                                )}
                            </Link>
                        </NextLink>
                    ))}
                </VStack>
                <VStack alignItems="flex-start">
                    {footerLinksSecond.map(({ href, label }) => (
                        <NextLink key={href} href={href} passHref>
                            <Link style={{ textDecoration: "none" }}>
                                {pathname === href ? (
                                    <Text fontWeight="bold">{label}</Text>
                                ) : (
                                    <Text>{label}</Text>
                                )}
                            </Link>
                        </NextLink>
                    ))}
                </VStack>
                <VStack alignItems="flex-start">
                    {footerLinksThird.map(({ href, label }) => (
                        <NextLink key={href} href={href} passHref>
                            <Link style={{ textDecoration: "none" }}>
                                {pathname === href ? (
                                    <Text fontWeight="bold">{label}</Text>
                                ) : (
                                    <Text>{label}</Text>
                                )}
                            </Link>
                        </NextLink>
                    ))}
                </VStack>
            </Stack>
        </VStack>
    );
};

export default Footer;

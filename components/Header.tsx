import {
    Button,
    HStack,
    Link,
    IconButton,
    useColorMode,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Link as LinkType } from "../lib/types/link";

const headerLinks: LinkType[] = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/blog",
        label: "Blog",
    },
];

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { pathname } = useRouter();
    return (
        <HStack
            as="nav"
            justifyContent="space-between"
            alignItems="center"
            py={6}
            pr={4}
        >
            <HStack display={{ base: "none", sm: "flex" }}>
                {headerLinks.map(({ href, label }) => (
                    <NextLink key={href} href={href} passHref>
                        <Button
                            as={Link}
                            size="md"
                            variant="ghost"
                            style={{ textDecoration: "none" }}
                        >
                            {pathname === href ? (
                                <Text fontWeight="bold">{label}</Text>
                            ) : (
                                <Text>{label}</Text>
                            )}
                        </Button>
                    </NextLink>
                ))}
            </HStack>
            <HStack display={{ base: "flex", sm: "none" }}>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Menu"
                        variant="ghost"
                        size="md"
                        icon={<HamburgerIcon />}
                    />
                    <MenuList>
                        {headerLinks.map(({ href, label }) => (
                            <MenuItem key={href}>
                                <NextLink href={href} passHref>
                                    <Button
                                        as={Link}
                                        size="md"
                                        variant="ghost"
                                        style={{ textDecoration: "none" }}
                                    >
                                        {pathname === href ? (
                                            <Text fontWeight="bold">
                                                {label}
                                            </Text>
                                        ) : (
                                            <Text>{label}</Text>
                                        )}
                                    </Button>
                                </NextLink>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </HStack>
            <IconButton
                aria-label="Toggle theme"
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                size="md"
                onClick={toggleColorMode}
            />
        </HStack>
    );
};

export default Header;

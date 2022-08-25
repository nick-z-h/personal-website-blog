import {
    Text,
    UnorderedList,
    ListItem,
    OrderedList,
    Heading,
    Box,
    Container,
    Link,
} from "@chakra-ui/react";

const h1 = ({ children }: any) => {
    return (
        <Heading as="h1" size="4xl">
            {children}
        </Heading>
    );
};

const h2 = ({ children }: any) => {
    return (
        <Heading as="h2" size="3xl">
            {children}
        </Heading>
    );
};

const h3 = ({ children }: any) => {
    return (
        <Heading as="h3" size="2xl">
            {children}
        </Heading>
    );
};

const h4 = ({ children }: any) => {
    return (
        <Heading as="h4" size="xl">
            {children}
        </Heading>
    );
};

const h5 = ({ children }: any) => {
    return (
        <Heading as="h5" size="lg">
            {children}
        </Heading>
    );
};

const h6 = ({ children }: any) => {
    return (
        <Heading as="h6" size="md">
            {children}
        </Heading>
    );
};

const pre = ({ children }: any) => {
    return (
        <Box w="full" padding={5} rounded="8px" bg="#2e3440" overflow="auto">
            <pre>{children}</pre>
        </Box>
    );
};

const li = ({ children }: any) => {
    return <ListItem>{children}</ListItem>;
};

const ol = ({ children }: any) => {
    return (
        <Container>
            <OrderedList>{children}</OrderedList>
        </Container>
    );
};

const ul = ({ children }: any) => {
    return (
        <Container>
            <UnorderedList>{children}</UnorderedList>
        </Container>
    );
};

const p = ({ children }: any) => {
    return <Text>{children}</Text>;
};

const a = ({ children, href }: any) => {
    return <Link href={href}>{children}</Link>;
};

const MDXComponents = {
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    h5: h5,
    h6: h6,
    pre: pre,
    li: li,
    ol: ol,
    ul: ul,
    p: p,
    a: a,
};

export default MDXComponents;

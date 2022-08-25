import { Box, Container, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { prismNordTheme } from "../styles/prism";
import { css, Global } from "@emotion/react";

const BlogLayout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <Container display="flex" maxW="container.md" minH="110vh">
            <Global
                styles={css`
                    ${prismNordTheme}
                `}
            />
            <VStack flex={1} spacing={12} alignItems="stretch" w="full">
                <Header />
                <Box flex={1} w="full" as="section" px={4}>
                    <VStack spacing={12} w="full">
                        {children}
                    </VStack>
                </Box>
                <Footer />
            </VStack>
        </Container>
    );
};

export default BlogLayout;

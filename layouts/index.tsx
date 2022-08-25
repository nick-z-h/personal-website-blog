import { Box, Container, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <Container display="flex" maxW="container.md" minH="110vh">
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

export default Layout;

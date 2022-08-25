import { VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import FeaturedPostsCard from "../components/FeaturedPostsCard";
import Hero from "../components/Hero";
import Layout from "../layouts";
import TextLink from "../components/TextLink";

const Home: NextPage = () => {
    return (
        <Layout>
            <Hero />
            <VStack alignItems="flex-start" w="full" spacing={4}>
                <FeaturedPostsCard endDiv={true} />
                <TextLink url="/blog" desc="Read all posts" />
            </VStack>
        </Layout>
    );
};

export default Home;

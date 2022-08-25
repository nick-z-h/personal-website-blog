import { Link, Heading, Text, Icon, HStack, Box } from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
import NextLink from "next/link";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { SpotifySong } from "../lib/types/spotify-song";

const CurrentlyPlaying = () => {
    const { data } = useSWR<SpotifySong>("/api/spotify-now-playing", fetcher);
    const playing = data?.isPlaying;
    return (
        <Box w="full">
            {playing ? (
                <NextLink href={data.songUrl} passHref>
                    <HStack
                        as={Link}
                        style={{ textDecoration: "none" }}
                        display="flex"
                        w="full"
                    >
                        <Icon as={FaSpotify} color="#1ed760" w={4} h={4} />
                        <Heading size="sm">{data.title}</Heading>
                        <Text>– {data.artist}</Text>
                    </HStack>
                </NextLink>
            ) : (
                <HStack display="flex" w="full">
                    <Icon as={FaSpotify} color="#1ed760" w={4} h={4} />
                    <Heading size="sm">Not Playing</Heading>
                    <Text>– Spotify</Text>
                </HStack>
            )}
        </Box>
    );
};

export default CurrentlyPlaying;

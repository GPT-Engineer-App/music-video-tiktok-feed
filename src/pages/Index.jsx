import React, { useState, useEffect } from "react";
import { Box, Heading, VStack, AspectRatio, IconButton, HStack, Text, Spinner } from "@chakra-ui/react";
import { FaShare, FaMusic } from "react-icons/fa";

const VIDEOS = [
  {
    id: 1,
    title: "Video 1",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    musicUrl: "https://example.com/music1.mp3",
  },
  {
    id: 2,
    title: "Video 2",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    musicUrl: "https://example.com/music2.mp3",
  },
  // Add more videos...
];

const Index = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating async data fetch
    setTimeout(() => {
      setVideos(VIDEOS);
      setLoading(false);
    }, 1000);
  }, []);

  const shareToTikTok = (video) => {
    // Implement logic to share video to TikTok
    console.log(`Sharing video: ${video.title}`);
  };

  const shareMusic = (musicUrl) => {
    // Implement logic to share music to TikTok
    console.log(`Sharing music: ${musicUrl}`);
  };

  return (
    <Box>
      <Heading mb={8}>Music Video Feed</Heading>

      {loading ? (
        <Spinner />
      ) : (
        <VStack spacing={8} align="stretch">
          {videos.map((video) => (
            <Box key={video.id} borderWidth={1} p={4}>
              <AspectRatio maxW="560px" ratio={16 / 9}>
                <iframe title={video.title} src={video.url} allowFullScreen />
              </AspectRatio>

              <HStack mt={4} spacing={4}>
                <Text fontWeight="bold">{video.title}</Text>
                <IconButton icon={<FaShare />} aria-label="Share video" onClick={() => shareToTikTok(video)} />
                <IconButton icon={<FaMusic />} aria-label="Share music" onClick={() => shareMusic(video.musicUrl)} />
              </HStack>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default Index;

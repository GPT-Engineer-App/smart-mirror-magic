import { Container, Text, VStack, Box, Heading, Image, IconButton, HStack, SimpleGrid } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box textAlign="center" py={10} bg="gray.800" color="white">
          <Heading as="h1" size="2xl">
            ReflecTech Innovations
          </Heading>
          <Text fontSize="xl">Revolutionizing Smart Mirror Technology</Text>
        </Box>

        {/* Features Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1580983218765-f663bec07b37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWFydCUyMG1pcnJvciUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE2NzIxNTM5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Smart Mirror" borderRadius="md" />
            </Box>
            <VStack align="start" spacing={4}>
              <Text fontSize="lg">Our smart mirrors are equipped with cutting-edge AI technology to provide a seamless and interactive experience.</Text>
              <Text fontSize="lg">Features include:</Text>
              <Text fontSize="md">- Voice Recognition</Text>
              <Text fontSize="md">- Facial Recognition</Text>
              <Text fontSize="md">- Real-time Weather Updates</Text>
              <Text fontSize="md">- Health Monitoring</Text>
              <Text fontSize="md">- Smart Home Integration</Text>
            </VStack>
          </SimpleGrid>
        </Box>

        {/* Benefits Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Benefits
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="start" spacing={4}>
              <Text fontSize="lg">Our smart mirrors offer numerous benefits to enhance your daily life:</Text>
              <Text fontSize="md">- Increased Convenience</Text>
              <Text fontSize="md">- Improved Health Tracking</Text>
              <Text fontSize="md">- Seamless Integration with Smart Home Devices</Text>
              <Text fontSize="md">- Enhanced Security with Facial Recognition</Text>
              <Text fontSize="md">- Personalized User Experience</Text>
            </VStack>
            <Box>
              <Image src="https://images.unsplash.com/photo-1519577918463-484ce33e1ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZW5lZml0cyUyMG9mJTIwc21hcnQlMjBtaXJyb3J8ZW58MHx8fHwxNzE2NzIxNTM5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Benefits" borderRadius="md" />
            </Box>
          </SimpleGrid>
        </Box>

        {/* Use Cases Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Use Cases
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1519577918463-484ce33e1ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWFydCUyMG1pcnJvciUyMHVzZSUyMGNhc2VzfGVufDB8fHx8MTcxNjcyMTU0MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Use Cases" borderRadius="md" />
            </Box>
            <VStack align="start" spacing={4}>
              <Text fontSize="lg">Our smart mirrors can be used in various settings:</Text>
              <Text fontSize="md">- Smart Homes</Text>
              <Text fontSize="md">- Fitness Centers</Text>
              <Text fontSize="md">- Retail Stores</Text>
              <Text fontSize="md">- Hotels</Text>
              <Text fontSize="md">- Offices</Text>
            </VStack>
          </SimpleGrid>
        </Box>

        {/* Footer */}
        <Box textAlign="center" py={10} bg="gray.800" color="white">
          <Text fontSize="lg">Follow Us</Text>
          <HStack justify="center" spacing={4} mt={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" isRound />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" isRound />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" isRound />
          </HStack>
          <Text mt={4}>© 2023 ReflecTech Innovations. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

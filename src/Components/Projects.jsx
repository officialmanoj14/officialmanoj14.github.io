import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Flex,
  Button,
  Container
} from '@chakra-ui/react';


const TechTags = (props) => {
  return (
    <HStack spacing={2} mt={'-15px'} >
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

// 1st project

const handleNordstromRack = () => {
  window.open("https://unit-2-construct-week-project-nordstrom-rack.netlify.app/");
}

const handleNordstromRackGithub = () => {
  window.open('https://github.com/Kandpalgokul01/NordstromRack_Construct_Week_1');
}

// 2nd project

const handleNuovo = () => {
  window.open('https://basspro-construct-week-project-nuovo.netlify.app/')
}

const handleNuovoGithub = () => {
  window.open('https://github.com/officialmanoj14/smoggy-leather-9365')
}

// 3rd project

const handleTripvillas = () => {
  window.open('https://friendly-alfajores-aa2856.netlify.app/')
}

const handleTripvillasGithub = () => {
  window.open('https://github.com/surajwithps/uninterested-ocean-1026')
}




const Projects = () => {
  return (
    
    <Container maxW={'7xl'} p="12" bg={'#ffffff'} >
    {/* 1st Project  */}
      <Heading as="h1" _hover={{color:'#00A3C4'}} color={'#03045e'} pt={'13px'}>Project Section</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              
              <Image
                  borderRadius="lg"
                  transform="scale(1.0)"
                  // border={'2px solid #00A3C4'}
                  src={
                    'Nordstrom_img.png'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          <Heading as="h2" mb={'35px'} textAlign={'left'} _hover={{color:'#03045e'}} color={'#00A3C4'} fontSize={'30px'}>
            Nordstrom Rack
          </Heading>

          <TechTags tags={['JavaScript', 'HTML', 'CSS', 'Rest API']} mb={'10px'} border={'1px solid green'}/>
          <Text
            as="p"
            margin="10px 0px 15px 0px"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg" textAlign={'left'} alignContent={'center'}>
            Nordstrom Rack is an e-commerce platform that sells clothes,
beauty products, accessories, cart and checkout section etc. The features we have built in this website was Authentication, This was collaborative projects clone by team of 4 developers and was executed in 4 days.
          </Text>
          <Flex >
            <Button color={"#03045e"}
                border={"1px solid #00A3C4"}
                padding={"2px 35px 3px 35px"}
                _hover={{ border: "1px solid white", color: "#00A3C4",backgroundColor:'#03045e' }}
                variant={"link"}
                cursor={"pointer"}
                borderRadius={"50px"}
                fontSize={"20px"}
                textDecoration={"none"}
                onClick={handleNordstromRackGithub}
                mr={8}>Github</Button>
            <Button
            color={"#03045e"}
            border={"1px solid #00A3C4"}
            padding={"2px 35px 3px 35px"}
            _hover={{ border: "1px solid white", color: "#00A3C4", backgroundColor:'#03045e'}}
            variant={"link"}
            cursor={"pointer"}
            borderRadius={"50px"}
            fontSize={"20px"}
            textDecoration={"none"}
            onClick={handleNordstromRack}
            mr={8}>Live</Button>
            
          </Flex>
        </Box>
      </Box>
      
      {/* 2nd Project */}
      
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              
              <Image
                  borderRadius="lg"
                  transform="scale(1.0)"
                  src={
                    'Basspro_img.png'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          <Heading as="h2" mb={'35px'} textAlign={'left'} _hover={{color:'#03045e'}} color={'#00A3C4'} fontSize={'30px'}>
            Nuovo - Basspro Shops
          </Heading>

          <TechTags tags={['JavaScript', 'HTML', 'CSS', 'ReactJS', 'Chakraui']} mb={'10px'} border={'1px solid green'}/>
          <Text
            as="p"
            margin="10px 0px 15px 0px"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg" textAlign={'left'} alignContent={'center'}>
            Basspro ia an American shops where we can buy different kind of accessories. This shops is specialized in selling Fishing, Hunting, Boating, Camping tools and other outdoors merchandises etc. This was a individual project that I had built in Masai School during Construct week and also delivered this project within 5 days.
          </Text>
          <Flex >
            <Button color={"#03045e"}
                border={"1px solid #00A3C4"}
                padding={"2px 35px 3px 35px"}
                _hover={{ border: "1px solid white", color: "#00A3C4",backgroundColor:'#03045e' }}
                variant={"link"}
                cursor={"pointer"}
                borderRadius={"50px"}
                fontSize={"20px"}
                textDecoration={"none"}
                onClick={handleNuovoGithub}
                mr={8}>Github</Button>
            <Button
            color={"#03045e"}
            border={"1px solid #00A3C4"}
            padding={"2px 35px 3px 35px"}
            _hover={{ border: "1px solid white", color: "#00A3C4", backgroundColor:'#03045e'}}
            variant={"link"}
            cursor={"pointer"}
            borderRadius={"50px"}
            fontSize={"20px"}
            textDecoration={"none"}
            onClick={handleNuovo}
            mr={8}>Live</Button>
            
          </Flex>
        </Box>
      </Box>

      {/* 3rd Project */}
      
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              
              <Image
                  borderRadius="lg"
                  transform="scale(1.0)"
                  src={
                    'tripvillas_img.png'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          <Heading as="h2" mb={'35px'} textAlign={'left'} _hover={{color:'#03045e'}} color={'#00A3C4'} fontSize={'30px'}>
            Tripvillas
          </Heading>

          <TechTags tags={['JavaScript', 'HTML', 'CSS', 'Rest API']} mb={'10px'} border={'1px solid green'}/>
          <Text
            as="p"
            margin="10px 0px 15px 0px"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg" textAlign={'left'} alignContent={'center'}>
            The largest holiday home rental portal in Asia. Where we can book
Holiday homes and homestay instead of Hotels and Resorts. The features we have built in this website was Authentication, searching, product, cart and payment section. This was collaborative projects clone by team of 4 developers and was executed in 4 days.
          </Text>
          <Flex >
            <Button color={"#03045e"}
                border={"1px solid #00A3C4"}
                padding={"2px 35px 3px 35px"}
                _hover={{ border: "1px solid white", color: "#00A3C4",backgroundColor:'#03045e' }}
                variant={"link"}
                cursor={"pointer"}
                borderRadius={"50px"}
                fontSize={"20px"}
                textDecoration={"none"}
                onClick={handleTripvillasGithub}
                mr={8}>Github</Button>
            <Button
            color={"#03045e"}
            border={"1px solid #00A3C4"}
            padding={"2px 35px 3px 35px"}
            _hover={{ border: "1px solid white", color: "#00A3C4", backgroundColor:'#03045e'}}
            variant={"link"}
            cursor={"pointer"}
            borderRadius={"50px"}
            fontSize={"20px"}
            textDecoration={"none"}
            onClick={handleTripvillas}
            mr={8}>Live</Button>
            
          </Flex>
        </Box>
      </Box>

    </Container>
  );
};

export default Projects;

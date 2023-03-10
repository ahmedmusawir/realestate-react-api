import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Box p='5' bg='#4299e1' mb='10'>
    <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
      <Image src={imageUrl} width={500} height={300} alt='banner' />
      <Box p='5'>
        <Text color='white' fontSize='sm' fontWeight='medium'>
          {purpose}
        </Text>
        <Text fontSize='3xl' fontWeight='bold' color='white'>
          {title1}
          <br />
          {title2}
        </Text>
        <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='white'>
          {desc1}
        </Text>
        <Button fontSize='xl'>
          <Link href={linkName}>
            <a className='linkStyle'>{buttonText}</a>
          </Link>
        </Button>
      </Box>
    </Flex>
  </Box>
);

const Home = ({ propertiesForRent, propertiesForSale }) => {
  // console.log({ propertiesForRent });
  // console.log({ propertiesForSale });
  return (
    <Box>
      <Banner
        purpose={'RENT A HOME'}
        title1='Rental Home for'
        title2='Everyone'
        desc1='Explore Aparments, Villas, Homes'
        desc2='and more...'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/303889306/4c366a6217884d7696edf454151f2a83'
      />
      <Flex flexWrap='wrap'>
        {propertiesForRent?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose={'BUY A HOME'}
        title1='Find, Buy & Own Your'
        title2='Dream Home'
        desc1='Explore Aparments, Villas, Homes'
        desc2='and more...'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/292589886/e2b6b3467d88444cabf4b28bd9379e23'
      />
      <Flex flexWrap='wrap'>
        {propertiesForSale?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
};

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;

/** @jsxImportSource theme-ui */
import { Box, Card, Flex, Heading, Image, NavLink, Text } from 'theme-ui';
import BabelImg from '../images/babel.png';
import CardAvatar from '../images/cardAvatar.png';

const TopicsCart = () => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: "space-between",
        minWidth: 884,
        marginY: 8,
      }}
      variant="cards.primary"
    >
      <Image
        src={BabelImg}
        alt="Babel"
        sx={{ width: 73, minWidth: 'auto !important' }}
      />

      <Box sx={{ maxWidth: 609 }}>
        <Heading as="h2" variant="text.heading" sx={{ fontSize: 24 }}>
          Babel
        </Heading>
        <Text as="p" variant="text.body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue
          morbi auctor id ut fringilla cras commodo. Gravida metus, dui ac
          ridiculus suspendisse vel. Purus pretium
        </Text>
        <Flex sx={{ alignItems: 'center' }}>
          <Image src={CardAvatar} variant="images.cardAvatar" alt="Avatar" />
          <Text as="span" sx={{ marginLeft: 2 }}>
            Farshid Shahmoradi
          </Text>
        </Flex>
      </Box>

      <NavLink href="#" variant="text.lead" sx={{fontSize:16, color: "#F39F47"}}>
        110 Vote
      </NavLink>
    </Flex>
  );
};

export default TopicsCart;

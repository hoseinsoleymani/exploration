import { useRive, useStateMachineInput } from 'rive-react';
import { Box, Flex, Heading } from 'theme-ui';

import Seo from '../components/Seo';
import TopicsCart from '../components/TopicsCard';

const STATE_MACHINE_NAME = 'machine';
const ON_HOVER_INPUT_NAME = 'Hover';

const HomagePage = () => {
  const { RiveComponent, rive } = useRive({
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
    src: '/solar.riv',
  });

  const onHoverInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    ON_HOVER_INPUT_NAME,
  );

  return (
    <>
      <Seo title="This Week" />
      <Flex
        as="main"
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 60,
          bg: 'background.1',
          minHeight: '100vh',
        }}
      >
        <div>
          <Heading variant="h1">THIS WEEK</Heading>
        </div>
        <Box
          as={RiveComponent}
          onMouseEnter={() => (onHoverInput.value = true)}
          onMouseLeave={() => (onHoverInput.value = false)}
          sx={{
            width: '90vw',
            maxWidth: '500px',
            height: '90vh',
            maxHeight: '500px',
            position: 'fixed',
            right: -214,
            top: '-30%',
          }}
        />

        <TopicsCart />
      </Flex>
    </>
  );
};

export default HomagePage;

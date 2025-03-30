import { Button, Center, Heading, VStack } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navigateToHostedCheckout = () => {
    navigate("/hosted-checkout");
  };

  return (
    <>
      <Center h={"100vh"} color="grey">
        <VStack margin="auto">
          <Heading>Stripe Payments With React & Java</Heading>
          <Button color={"white"} onClick={navigateToHostedCheckout}>
            Hosted Checkout
          </Button>
        </VStack>
      </Center>
    </>
  );
}

export default Home;

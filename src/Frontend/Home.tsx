import {Button, Center, Heading, VStack} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    const navigateToIntegratedCheckout = () => {
        navigate("/integrated-checkout")
    }

    return (
        <>
            <Center h={'100vh'} color='grey'>
                <VStack margin='auto'>
                    <Heading>Stripe Payments With React & Java</Heading>
                    <Button
                        color="black" variant="subtle" colorPalette={"gray"}
                        onClick={navigateToIntegratedCheckout}>
                        Integrated Checkout
                    </Button>
                </VStack>
            </Center>
        </>
    )
}

export default Home
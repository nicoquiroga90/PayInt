import {Button, Center, Heading, VStack} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

function Success() {
    const navigate = useNavigate()
    const onButtonClick = () => {
        navigate("/")
    }
    return <Center h={'100vh'} color='green'>
        <VStack margin={3}>
            <Heading fontSize={'4xl'}>Success!</Heading>
            <Button onClick={onButtonClick} colorScheme={'green'}>Go Home</Button>
        </VStack>
    </Center>
}

export default Success
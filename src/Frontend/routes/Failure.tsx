import {Button, Center, Heading, VStack} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

function Failure() {
    const navigate = useNavigate()
    const onButtonClick = () => {
        navigate("/")
    }

    return <Center h={'100vh'} color='red'>
        <VStack margin={3}>
            <Heading fontSize={'4xl'}>Failure!</Heading>
            <Button onClick={onButtonClick} colorScheme={'red'}>Try Again</Button>
        </VStack>
    </Center>
}

export default Failure
import { Box, HStack, Text } from 'native-base'

const Header = () => {
    return (
        <Box safeAreaTop>
            <HStack justifyContent={"center"} bg={"lightBlue.400"} py={"3"}>
                <Text color={"white"} fontSize={"2xl"} fontWeight={"bold"}>Dota 2 Heroes</Text>
            </HStack>
        </Box>
    )
}

export default Header
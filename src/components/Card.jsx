import { Box, HStack, Image, VStack, Text, ScrollView } from 'native-base'

const Card = ({ data }) => {

    const url = 'https://api.opendota.com'

    return (
        <Box p={"1"}>
            <HStack p={"2"} shadow={"2"} borderRadius={"xl"} bg={"white"}>
                <Image source={{uri: url + data.img}} w={"24"} h={"16"} rounded={"xl"} alt={data.name} resizeMode={"cover"}/>
                <VStack ml={"3"}>
                    <Text fontSize={"xl"} fontWeight={"bold"} mb={"1"}>{data.localized_name}</Text>
                    <HStack>
                        <ScrollView horizontal w={200}>
                            {
                                data.roles && data.roles.map(
                                    (role, index) => (
                                        <Box key={index} m={"1"} px={"1"} bg={"lightBlue.200"} rounded={"lg"}>
                                            <Text>{role}</Text>
                                        </Box>
                                    )
                                )
                            }
                        </ScrollView>
                    </HStack>
                </VStack>
            </HStack>
        </Box>
    )
}

export default Card
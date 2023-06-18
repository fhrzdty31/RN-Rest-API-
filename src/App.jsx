import { useEffect, useState } from "react"
import axios from "axios"
import { NativeBaseProvider, ScrollView, VStack } from "native-base"

import Header from "./components/Header"
import Card from "./components/Card"

const App = () => {

    const [heroes, setHeroes] = useState([])

    const getHeroes = async () => {
        await axios.get(
            'https://api.opendota.com/api/herostats'
        ).then(
            res => {
                setHeroes(res.data)
            }
        )
    }

    useEffect(
        () => {
            getHeroes()
        }, []
    )

    return (
        <NativeBaseProvider>
            <Header />
            <ScrollView p={"3"} >
                <VStack mb={"5"}>
                    {
                        heroes && heroes.map(
                            (hero, index) => (
                                <Card key={index} data={hero}/>
                            )
                        )
                    }
                </VStack>
            </ScrollView>
        </NativeBaseProvider>
    )
}

export default App
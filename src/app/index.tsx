import { View, Text } from "react-native";
import { router } from "expo-router";

import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";
import { Button } from "@/components/button";

// Componente sempre começa com a letra Maiuscula...
export default function Index()
{
    // Tem que ter apenas um elemento retornando como se esse elemento fosse uma classe...
    return (
        <View style={{ flex: 1, padding: 40, gap: 40 }}>
            <Welcome />
            <Steps />
            
            <Button onPress={() => router.navigate("/home")}>
                <Button.Tittle>Começar</Button.Tittle>
            </Button>

        </View>
    );
}
import { View, Text } from "react-native";

import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";

// Componente sempre começa com a letra Maiuscula...
export default function Index()
{
    // Tem que ter apenas um elemento retornando como se esse elemento fosse uma classe...
    return (
        <View style={{ flex: 1, padding: 40, gap: 40 }}>
            <Welcome />
            <Steps />
        </View>
    );
}
import { Text, View } from "react-native";

import { IconProps } from "@tabler/icons-react-native";

import { colors } from "@/styles/colors";
import { s } from "./styles";

type Props = {
    tittle: string
    description: string
    icon: React.ComponentType<IconProps>
}

export function Step({ tittle, description, icon: Icon }: Props)
{
    return (
        <View style={s.container}>

            {Icon && <Icon size={32} color={colors.red.base} />}

            <View style={s.details}>
                <Text style={s.tittle}>{tittle}</Text>
                <Text style={s.description}>{description}</Text>
            </View>
        </View>
    )
}
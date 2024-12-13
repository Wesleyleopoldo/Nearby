import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator } from "react-native";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean
}

function Button({ children, isLoading = false, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={s.container} activeOpacity={0.5} disabled={isLoading} {...rest}>
            {
                isLoading ? <ActivityIndicator size={"small"} color={colors.gray[100]}/> : children
            }
        </TouchableOpacity>
    )
}

function Tittle({ children }: TextProps) {
    return <Text style={s.tittle}>{children}</Text>
}

type IconProps = {
    icon: React.ComponentType<TablerIconProps>
}

function Icon({ icon: Icon }: IconProps) {
    return <Icon size={24} color={colors.gray[100]} />
}

Button.Tittle = Tittle
Button.Icon = Icon

export { Button }
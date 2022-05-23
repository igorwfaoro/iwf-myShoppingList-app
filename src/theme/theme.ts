import { createTheme } from '@rneui/themed';
import { themeVariables } from './variables';

export const appTheme = createTheme({
    lightColors: {
        primary: themeVariables.colors.primary,
        secondary: themeVariables.colors.secondary,
        success: themeVariables.colors.success,
        warning: themeVariables.colors.warning,
        white: themeVariables.colors.white
    },
    darkColors: {
        primary: themeVariables.colors.primary,
        secondary: themeVariables.colors.secondary,
        success: themeVariables.colors.success,
        warning: themeVariables.colors.warning,
        white: themeVariables.colors.white
    }
});
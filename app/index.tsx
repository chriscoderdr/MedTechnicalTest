import { View } from "react-native";
import { useFonts } from '@expo-google-fonts/poppins/useFonts';
import { Poppins_400Regular } from '@expo-google-fonts/poppins/400Regular';
import { Poppins_500Medium } from '@expo-google-fonts/poppins/500Medium';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins/600SemiBold';
import { Poppins_700Bold } from '@expo-google-fonts/poppins/700Bold';
import { Provider } from 'react-redux';
import { store } from '@/src/store/store';
import MiniFicha from "./components/mini-ficha/mini-ficha";

export default function Home() {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    });
    
    if (!fontsLoaded) {
        return <View />;
    }
    
    return (
        <Provider store={store}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24, backgroundColor: '#F4EFF8' }}>
                <MiniFicha />
            </View>
        </Provider>
    );
}
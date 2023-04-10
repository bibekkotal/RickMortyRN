import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './screen/Home';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const queryClient = new QueryClient();
const DARK = '#2C4C3B'
const COLOR = '#69ba59';
const LIGHT = '#FFFFFF'

function App(): JSX.Element {
  React.useEffect(() => {
    SplashScreen.hide();
  }, [])


  const isDarkMode = useColorScheme() === 'dark'
  const backgroundStyle = { backgroundColor: isDarkMode ? DARK : LIGHT };


  return (
    <QueryClientProvider client={queryClient} >
      <Home />
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </QueryClientProvider>
  );
}

export default App;

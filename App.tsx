/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import NavContainer from './src/components/navigation/NavContainer';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavContainer />
    </PaperProvider>
  );
}

export default App;

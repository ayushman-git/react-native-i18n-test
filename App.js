import React from 'react';
import {SafeAreaView, Text} from 'react-native';
// import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {zh, en, es} from './i18n/supportedLanguages';

const App = () => {
  i18n.fallbacks = true;
  i18n.translations = {en, zh, es};
  i18n.locale = 'zh';
  return (
    <SafeAreaView>
      <Text style={{fontSize: 20}}>{i18n.t('welcome')}</Text>
      <Text style={{fontSize: 20}}>{i18n.t('interpolation.some', { name: "Ayushman" })}</Text>
    </SafeAreaView>
  );
};

export default App;

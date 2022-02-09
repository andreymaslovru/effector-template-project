import 'react-native-gesture-handler';

import React from 'react';

import {withProviders} from './providers';
import {Router} from './router';

const App = () => <Router />;

export default withProviders(App);

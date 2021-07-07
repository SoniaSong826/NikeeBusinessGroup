import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

function MediaScreen() {
	return <WebView source={{ uri: 'https://www.nikeeworld.com/our-nikee-team/' }} />;
}
export default MediaScreen;

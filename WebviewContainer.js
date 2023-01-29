import React, {useEffect, useState} from 'react';
import {
    BackHandler,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';


const WebviewContainer = ({ handleSetRef, handleEndLoading }) => {
    const url = "http://localhost:3000/main";

    /** 웹뷰에서 rn으로 값을 보낼때 거치는 함수 */
    const handleOnMessage = ({ nativeEvent: { data } }) => {
        // data에 웹뷰에서 보낸 값이 들어옵니다.
        console.log(data);
    };

    return (
                <WebView
                    onLoadEnd={handleEndLoading}
                    onMessage={handleOnMessage}
                    ref={handleSetRef}
                    source={{ url }}
                />

    );
};
export default WebviewContainer;
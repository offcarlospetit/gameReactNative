import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default MainWrapper = (props) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            {props.children}
            <View>
                <Text style={styles.footerText}>
                    Copyright Cleverit
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1, alignItems: 'center' },
    footerText: { fontSize: 25, alignSelf: 'center' }
})

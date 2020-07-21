import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';



export default function CountDown(props) {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(60)
    const [finish, setfinish] = useState(false)

    useEffect(() => {
        let timer = 0
        if (seconds > 0) {
            timer = setInterval(() => setSeconds(seconds - 1), 1000);
        }
        if (timer == 0 && minutes > 0) {
            setSeconds(59)
            setMinutes(minutes - 1)
        }
        if (seconds == 0 && minutes == 0) setfinish(true)



        return () => clearInterval(timer);
    }, [seconds]);

    let sec = seconds < 10 ? "0" + seconds : seconds
    if (finish) props.finish()

    return (
        <View style={styles.countDownContainer}>
            <Icon name={"clock-o"} size={25} color={"black"} />
            <Text style={styles.text}>{minutes + " : " + sec + "s"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    countDownContainer: { flex: 1, flexDirection: 'row', alignItems: 'center' },
    text: { marginLeft: 10 }
})
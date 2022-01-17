import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './radioButtonStyles';

function RadioButton(props) {
    return (
        <View>
            {props.values.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={styles.radio} onPress={() => props.onPress(item.value)}>
                        <Text>{item.label}</Text>
                        <View style={styles.ring}>
                            {
                                props.selected === item.value ?
                                    <View style={styles.circle} />
                                    : null
                            }
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    );
}

export default RadioButton;
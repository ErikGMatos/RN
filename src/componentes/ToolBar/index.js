import React from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

const ToolBar = () => (
    <View style={styles.container}>
        <TouchableOpacity>
            <Icon style={styles.icon} name="home" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
            <Icon
                style={styles.icon}
                name="paper-plane"
                size={25}
                color="#fff"
            />
        </TouchableOpacity>

        <TouchableOpacity>
            <Icon
                style={styles.icon}
                name="cloud-upload"
                size={25}
                color="#fff"
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <Icon style={styles.icon} name="refresh" size={25} color="#fff" />
        </TouchableOpacity>
    </View>
);

export default ToolBar;

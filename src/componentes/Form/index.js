import React from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

const Form = () => (
    <View style={styles.container}>
        <Image style={styles.img} source={require("../../img/sl3.png")} />
        <Text style={styles.titulo}>Insira suas notas nos campos abaixo:</Text>
        <TextInput
            style={styles.input}
            placeholder="Digite aqui sua nota 1..."
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            maxLength={3}
        />
        <TextInput
            style={styles.input}
            placeholder="Digite aqui sua nota 2..."
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            maxLength={3}
        />
        <TextInput
            style={styles.input}
            placeholder="Digite aqui sua nota 3..."
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            maxLength={3}
        />

        <TouchableOpacity style={styles.containerCalcular}>
            <Icon
                style={styles.iconCalcular}
                name="calculator"
                size={30}
                color="#333"
            />
            <Text style={styles.textCalcular}>Calcular</Text>
        </TouchableOpacity>
    </View>
);

export default Form;

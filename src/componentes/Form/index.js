import React, { Component } from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

class Form extends Component {
    state = {
        nota1: "",
        nota2: "",
        nota3: "",
        total: ""
    };

    SomaTotal = () => {
        const { nota1, nota2, nota3 } = this.state;
        const total = nota1 + nota2 + nota3;
        this.setState({ total });
    };

    reset = () => {
        this.setState({ nota1: "", nota2: "", nota3: "", total: "" });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>
                    Insira suas notas nos campos abaixo:
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui sua nota 1..."
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    maxLength={3}
                    onChangeText={async nota1 => {
                        const nota = nota1 === "" ? "0" : nota1;
                        await this.setState({ nota1: parseInt(nota) });
                        this.SomaTotal();
                    }}
                    value={`${this.state.nota1}`}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui sua nota 2..."
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    maxLength={3}
                    onChangeText={async nota2 => {
                        const nota = nota2 === "" ? "0" : nota2;
                        await this.setState({ nota2: parseInt(nota) });
                        this.SomaTotal();
                    }}
                    value={`${this.state.nota2}`}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui sua nota 3..."
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    maxLength={3}
                    onChangeText={async nota3 => {
                        const nota = nota3 === "" ? "0" : nota3;
                        await this.setState({ nota3: parseInt(nota) });
                        this.SomaTotal();
                    }}
                    value={`${this.state.nota3}`}
                />

                <TouchableOpacity
                    style={styles.containerCalcular}
                    onPress={this.reset}
                >
                    {/* <Icon
                        style={styles.iconCalcular}
                        name="calculator"
                        size={30}
                        color="#333"
                    /> */}
                    <Text style={styles.textCalcular}>Reset</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 28, marginTop: 20 }}>
                    Questões prova final:{" "}
                    <Text style={{ color: "#3D7AE8", fontWeight: "bold" }}>
                        {this.state.total}
                    </Text>
                </Text>
                {/* <Text>{this.state.nota1}</Text>
                <Text>{this.state.nota2}</Text>
                <Text>{this.state.nota3}</Text> */}
            </View>
        );
    }
}

export default Form;

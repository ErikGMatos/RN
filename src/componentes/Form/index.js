import React, { Component } from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import styles from "./styles";
import Pesos from "./pesoNota";

class Form extends Component {
    state = {
        nota1: "",
        nota2: "",
        nota3: "",
        total: "",
        peso1: "",
        peso2: "",
        peso3: "",
        pesototal: ""
    };

    SomaTotal = () => {
        const {
            nota1,
            nota2,
            nota3,
            peso1,
            peso2,
            peso3,
            pesototal
        } = this.state;
        const total = Number(nota1) + Number(nota2) + Number(nota3);
        const pesototal2 = Number(peso1) + Number(peso2) + Number(peso3);
        this.setState({
            total: total.toFixed(2),
            pesototal: pesototal2.toFixed(2)
        });
    };

    reset = () => {
        this.setState({
            nota1: "",
            nota2: "",
            nota3: "",
            total: "",
            peso1: "",
            peso2: "",
            peso3: "",
            pesototal: ""
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>
                    Insira suas notas nos campos abaixo:
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >
                    <TextInputMask
                        type={"money"}
                        keyboardType="numeric"
                        options={{
                            separator: ".",
                            unit: ""
                        }}
                        placeholder="nota 1"
                        maxLength={5}
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        value={this.state.nota1}
                        onChangeText={async nota1 => {
                            const peso1 = Number(
                                (nota1 * Pesos.peso1) / 10
                            ).toFixed(2);
                            await this.setState({
                                nota1,
                                peso1
                            });
                            this.SomaTotal();
                        }}
                    />
                    <Text style={styles.textNotaPesoFinal}>
                        Nota peso: {this.state.peso1}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >
                    <TextInputMask
                        type={"money"}
                        keyboardType="numeric"
                        options={{
                            separator: ".",
                            unit: ""
                        }}
                        placeholder="nota 2"
                        maxLength={5}
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        value={this.state.nota2}
                        onChangeText={async nota2 => {
                            const peso2 = Number(
                                (nota2 * Pesos.peso2) / 10
                            ).toFixed(2);
                            await this.setState({
                                nota2,
                                peso2
                            });
                            this.SomaTotal();
                        }}
                    />
                    <Text style={styles.textNotaPesoFinal}>
                        Notapeso: {this.state.peso2}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >
                    <TextInputMask
                        type={"money"}
                        keyboardType="numeric"
                        options={{
                            separator: ".",
                            unit: ""
                        }}
                        maxLength={5}
                        placeholder="nota 3"
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        value={this.state.nota3}
                        onChangeText={async nota3 => {
                            const peso3 = Number(
                                (nota3 * Pesos.peso3) / 10
                            ).toFixed(2);
                            await this.setState({
                                nota3,
                                peso3
                            });
                            this.SomaTotal();
                        }}
                    />
                    <Text style={styles.textNotaPesoFinal}>
                        Nota peso: {this.state.peso3}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.containerCalcular}
                    onPress={this.reset}
                >
                    <Text style={styles.textCalcular}>Reset</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, marginTop: 20 }}>
                    Questões prova final:{" "}
                    <Text style={{ color: "#3D7AE8", fontWeight: "bold" }}>
                        {this.state.total}
                    </Text>
                </Text>
                <Text style={{ fontSize: 20, marginTop: 20 }}>
                    Peso total:{" "}
                    <Text style={{ color: "#3D7AE8", fontWeight: "bold" }}>
                        {this.state.pesototal}
                    </Text>
                </Text>
            </View>
        );
    }
}

export default Form;

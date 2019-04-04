import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import styles from "./styles";
import Pesos, { valorPorQuestao } from "./pesoNota";

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
        const somaDosPesos = Number(peso1) + Number(peso2) + Number(peso3);
        this.setState({
            pesototal: somaDosPesos.toFixed(2)
        });
    };

    reset = () => {
        this.setState({
            nota1: "",
            nota2: "",
            nota3: "",
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
                        returnKeyType={"next"}
                        autoFocus={true}
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
                        returnKeyType={"next"}
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
                        ref="terceiro"
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
                <Text>
                    Considerando uma média mínima de{" "}
                    <Text style={styles.span}>6</Text> e numero de questões na
                    prova final de <Text style={styles.span}>16</Text>
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItem: "center",
                        marginTop: 20
                    }}
                >
                    <Text style={{ fontSize: 18 }}>
                        Mínimo de questoes na prova final:
                    </Text>
                    <Text
                        style={{
                            color: "#3d7ae8",
                            fontWeight: "bold",
                            paddingHorizontal: 10,
                            fontSize: 19
                        }}
                    >
                        {6 - this.state.pesototal === 6
                            ? ""
                            : 6 - this.state.pesototal < 0
                            ? ""
                            : Math.ceil(
                                  (6 - this.state.pesototal) / valorPorQuestao
                              )}
                    </Text>
                </View>
            </View>
        );
    }
}

export default Form;

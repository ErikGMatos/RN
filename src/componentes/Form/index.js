import React, { Component } from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import { TextInputMask } from "react-native-masked-text";
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
        const total = Number(nota1) + Number(nota2) + Number(nota3);
        this.setState({ total: total.toFixed(2) });
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
                            await this.setState({
                                nota1
                            });
                            this.SomaTotal();
                        }}
                    />
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
                            await this.setState({
                                nota2
                            });
                            this.SomaTotal();
                        }}
                    />
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
                            await this.setState({
                                nota3
                            });
                            this.SomaTotal();
                        }}
                    />
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
            </View>
        );
    }
}

export default Form;

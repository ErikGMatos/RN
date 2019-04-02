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
                <TextInputMask
                    type={"custom"}
                    keyboardType="numeric"
                    options={{
                        mask: "9.99"
                    }}
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
                    type={"custom"}
                    options={{
                        mask: "9.99"
                    }}
                    keyboardType="numeric"
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
                    type={"custom"}
                    options={{
                        mask: "9.99"
                    }}
                    keyboardType="numeric"
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

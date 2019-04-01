import React, { Component } from "react";
import Toolbar from "../componentes/ToolBar";
import Form from "../componentes/Form";
import { View, StyleSheet, ScrollView, Image } from "react-native";

export default class Main extends Component {
    state = {};

    static navigationOptions = {
        title: "Calculadora de notas"
    };

    componentDidMount() {}

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
                <Image style={styles.img} source={require("../img/sl3.png")} />
                <View style={styles.container}>
                    <View>
                        <ScrollView>
                            <View style={styles.containerForm}>
                                <Form />
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <Toolbar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3f3",
        justifyContent: "center"
    },
    containerForm: {
        flex: 1
    },
    img: {
        marginRight: "auto",
        marginLeft: "auto",
        height: 70
    }
});

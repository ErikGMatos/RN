import React, { Component } from "react";
import Toolbar from "../componentes/ToolBar";
import Form from "../componentes/Form";
import { View, StyleSheet, ScrollView } from "react-native";

export default class Main extends Component {
    state = {};

    static navigationOptions = {
        title: "Calculadora de notas "
    };

    componentDidMount() {}

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.containerForm}>
                        <Form />
                    </View>
                </ScrollView>
                <Toolbar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3f3",
    },
    containerForm: {
        flex: 1,
        
        
    }
});

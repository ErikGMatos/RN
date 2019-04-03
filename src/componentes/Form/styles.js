import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#fff",
        paddingVertical: 0,
        paddingBottom: 0,
        height: 50,
        marginBottom: 10,
        borderRadius: 5,
        fontSize: 18,
        flex: .3 ,
        textAlign:"center"
    },
    container: {
        paddingHorizontal: 30
    },
    titulo: {
        fontSize: 20,
        color: "#333",
        fontWeight: "bold",
        marginBottom: 20
    },
    containerCalcular: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#3D7AE8",
        height: 60,
        borderRadius: 3,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#3D7AE8",
        elevation: 2,
        width: 100
    },
    iconCalcular: {
        color: "#fff",
        paddingRight: 20
    },
    textCalcular: {
        color: "#fff",
        fontSize: 22
    }
});

export default styles;

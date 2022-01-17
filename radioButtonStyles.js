import { StyleSheet } from "react-native";

export default StyleSheet.create({
    ring: {
        borderColor: '#536afc',
        height: 20,
        width: 20,
        borderRadius: 12,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        backgroundColor: '#536afc',
        height: 10,
        width: 10,
        borderRadius: 6,
    },
    radio: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingBottom: 5,
        paddingTop: 5,
    }
});
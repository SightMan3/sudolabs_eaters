import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    section: {
        backgroundColor: "#222222",
        alignItems: "center",
        justifyContent: "center",
        width: width,
        height: height,
        flexDirection: "column"
    },
})

export default styles
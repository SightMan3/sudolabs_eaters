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
    title: {
        //backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        height: "25%",
        width: width
    },
    about_little: {
        //backgroundColor: "blue",
        width: width,
        height: "10%"
    },
    inputs: {
        //backgroundColor: "green",
        height: "60%",
        width: width,
        
        alignItems: "center"
    },
    about_little_text: {
        textAlign: "center",
        fontSize: 20,
        color: "white"
    },
    title_text: {
        fontSize: 50,
        color: "white"
    },
    nameOnFocus: {
        borderBottomColor: "#ff985A",
        borderBottomWidth: 1,
        width: width/2,
        textAlign: "center",
        color: "white",
    },
    nextBTN: {
        backgroundColor: "#ff985a",
        width: "50%",
        height: 40,
        borderRadius: 35,
        marginTop: width/8,
        justifyContent: "center",
        alignItems: "center",
    },

})

export default styles
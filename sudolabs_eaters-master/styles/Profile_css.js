import { StyleSheet, Dimensions, ImageBackground } from "react-native"

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    aboutLittle: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
    },
    icon: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    profile_thingies: {
        width: width,
        height: "15%",
        justifyContent: "center",
        alignItems: "center"
    },
    stats: {
        width: width,
        height: "20%",
        alignItems: "center",
    },
    time_icon: {
        width: 45,
        height: 45,
    },
    eating: {
        width: "65%",
        height: "50%",
        flexDirection: "row",
        alignItems: "center", 
    },
    orders: {
        width: "65%",
        height: "50%",
        flexDirection: "row",
        alignItems: "center", 
    },
    order_icon: {
        width: 45,
        height: 45
    },
    about_todays_order: {
        justifyContent: "center",
        alignItems: "center",
        width: width,
        height: "15%"
    },
    title: {
        color: "white",
        margin: "2%",
        fontSize: 18
    },
    orderer: {
        color: "#ff985A",
        fontSize: 28,
        
    },
    summary: {
        color: "white",
        backgroundColor: "#ff985A",
        width: "50%",
        alignItems: "center",
        height: "5%",
        justifyContent: "center",
        borderRadius: 50,
        marginBottom: "25%"

    },
    startVoting: {
        color: "white",
        backgroundColor: "#ff985A",
        width: "40%",
        alignItems: "center",
        height: "5%",
        justifyContent: "center",
        borderRadius: 50,
    },
    
    
})

export default styles
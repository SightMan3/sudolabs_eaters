import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    dayRow:{
        flexDirection:'row',
        flex: 1,
        height: 50,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#000'
        
    },
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold",
        flex: 1,
    },
    checkbox: {
        alignSelf:'flex-end',
        height: 50
    }  
})

export default styles
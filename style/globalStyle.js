import {StyleSheet} from 'react-native'
export const globalStyles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer:{
        flex:1,
    },
    icon:{
        width:100,
        height: 80,
    },  
    listContainer:{
        flex:4,
        flexDirection: 'row',
        paddingHorizontal:10,
    },
    touchable:{
        flex:1,
        paddingTop:10,
    },
    title: {
        fontSize:19,
        fontWeight: 'bold'
    }
})
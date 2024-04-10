import {TouchableOpacity, View,Text} from "react-native";
import {StyleSheet} from "react-native";
const CustomToolbar = ({ title, onLeftPress, onRightPress }) => {
    return (
        <View style={styles.toolbar}>
            {/* 左边按钮 */}
            <TouchableOpacity onPress={onLeftPress} style={styles.button}>
                <Text>左</Text>
            </TouchableOpacity>

            {/* 标题 */}
            <Text style={styles.title}>{title}</Text>

            {/* 右边按钮 */}
            <TouchableOpacity onPress={onRightPress} style={styles.button}>
                <Text>右</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    toolbar: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: '#6200ee',
    },
    title: {
        color: '#ffffff',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    button: {
        minWidth: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomToolbar;
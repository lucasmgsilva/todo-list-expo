import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#262626',
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 8,
        borderColor: '#333333',
        marginBottom: 8,
    },
    isNotCompletedButton: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#4EA8DE',
        borderRadius: 100,
    },
    isCompletedButton: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#5E60CE',
        borderRadius: 100,
        backgroundColor: '#5E60CE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskListItemText: {
        color: '#F2F2F2',
        lineHeight: 18,
        flex: 1
    },
})
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    header: {
        paddingVertical: 78,
        alignItems: 'center',
        backgroundColor: '#0D0D0D',
    },
    logo: {
        
    },
    main: {
        flex: 1,
        padding: 24,
        marginTop: -48,
    },
    taskSection: {
        flexDirection: 'row',
        gap: 4,
    },
    taskInput: {
        flex: 1,
        backgroundColor: '#262626',
        padding: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#0D0D0D',
        color: '#F2F2F2',
    },
    taskAddButton: {
        backgroundColor: '#1E6F9F',
        padding: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#0D0D0D',
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32,
    },
    summaryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    summaryBadge: {
        backgroundColor: '#333333',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 50,
    },
    summaryCreatedText: {
        fontWeight: 'bold',
        color: '#4EA8DE',
    },
    summaryCompletedText: {
        fontWeight: 'bold',
        color: '#8284FA',
    },
    summaryBadgeText: {
        color: '#D9D9D9',
        fontWeight: 'bold',
    },
    taskList: {
        marginTop: 20,
        flex: 1,
    },
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
    emptyData: {
        alignItems: 'center',
        paddingVertical: 48,
        paddingHorizontal: 20,
        borderTopColor: '#333333',
        borderTopWidth: 1,
    },
    emptyDataTitle: {
        color: '#F2F2F2',
        fontWeight: 'bold',
        marginTop: 16,
    },
    emptyDataSubtitle: {
        color: '#F2F2F2',
    }
})
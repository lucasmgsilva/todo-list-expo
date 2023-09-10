import { Check, Trash } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Task } from "../../screens/Home";

interface TaskItemProps {
    task: Task;
    onChangeTaskStatus: (taskId: number) => void
    onRemoveTask: (taskId: number) => void
}

export function TaskItem({ task, onChangeTaskStatus, onRemoveTask }: TaskItemProps) {
    return (
        <View style={styles.taskListItem}>
            <TouchableOpacity
                onPress={() => onChangeTaskStatus(task.id)}
            >
                {!task.isCompleted ? (
                        <View style={styles.isNotCompletedButton} />
                    ) : (
                        <View style={styles.isCompletedButton}>
                            <Check color="#F2F2F2" size={14}/>
                        </View>
                )}
            </TouchableOpacity>

            <Text style={styles.taskListItemText}>{task.description}</Text>

            <TouchableOpacity
                onPress={() => onRemoveTask(task.id)}
            >
                <Trash size={20} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}
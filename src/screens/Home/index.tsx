import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Check, Circle, Clipboard, ClipboardText, PlusCircle, Trash } from "phosphor-react-native";
import { useState } from "react";

interface Task {
    id: number;
    description: string;
    isCompleted: boolean;
}

export function Home() {
    const [newTask, setNewTask] = useState<string>('')
    const [tasks, setTasks] = useState<Task[]>([]);

    const summary = tasks.reduce((acc, currTask) => {
        return {
            totalCount: acc.totalCount + 1,
            completedCount: currTask.isCompleted ? acc.completedCount + 1 : acc.completedCount
        }
    }, {totalCount: 0, completedCount: 0})

    function handleAddTask() {
        const taskText = newTask.trim()

        if (taskText === ''){
            return
        }

        const newTaskObject: Task = {
            id: tasks.length + 1,
            description: taskText,
            isCompleted: false,
        }

        setTasks(prevTasks => [...prevTasks, newTaskObject]);
        setNewTask('');
    }

    function handleChangeTaskStatus(id: number) {
        setTasks(prevTasks => {
            const updatedTasks = prevTasks.map(task => task.id === id ? {
                ...task,
                isCompleted: !task.isCompleted
            } : task)

            return updatedTasks;
        });
    }

    function handleRemoveTask(id: number) {
        setTasks(prevTasks => {
            const filteredTasks = prevTasks.filter(task => task.id !== id)
            return filteredTasks;
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />
            </View>

            <View style={styles.main}>
                <View style={styles.taskSection}>
                    <TextInput
                        style={styles.taskInput}
                        placeholderTextColor="#808080"
                        placeholder="Adicione uma nova tarefa"
                        value={newTask}
                        onChangeText={setNewTask}
                    />

                    <TouchableOpacity
                        style={styles.taskAddButton}
                        onPress={handleAddTask}
                    >
                        <PlusCircle color="#F2F2F2" />
                    </TouchableOpacity>
                </View>

                <View style={styles.summary}>
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryCreatedText}>Criadas</Text>
                        <View style={styles.summaryBadge}>
                            <Text style={styles.summaryBadgeText}>{summary.totalCount}</Text>
                        </View>
                    </View>
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryCompletedText}>Concluídas</Text>
                        <View style={styles.summaryBadge}>
                            <Text style={styles.summaryBadgeText}>{summary.completedCount}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.taskList}>
                    {tasks.length > 0 ? (
                        <FlatList 
                        data={tasks}
                        keyExtractor={task => String(task.id)}
                        renderItem={({ item: task }) => (
                            <View style={styles.taskListItem}>
                                <TouchableOpacity
                                    onPress={() => handleChangeTaskStatus(task.id)}
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
                                    onPress={() => handleRemoveTask(task.id)}
                                >
                                    <Trash size={20} color="#808080" />
                                </TouchableOpacity>
                            </View>
                        )}
                        />
                    ) : (
                        <View style={styles.emptyData}>
                            <ClipboardText color="#808080" size={56} />
                            <Text style={styles.emptyDataTitle}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.emptyDataSubtitle}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                    
                </View>


            </View>

        </View>
    )
}
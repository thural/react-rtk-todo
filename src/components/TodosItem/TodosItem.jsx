import { TodoItemContainer, DetailsBox } from './TodosItem.styles'
import { Text } from './TodosItem.styles'

const TodosItem = ({ todo }) => {
    const { id, title, completed } = todo

    return (
        <TodoItemContainer>
            <DetailsBox>
                <Text variant="h5">ID: {id}</Text>
                <Text variant="h4">Title: {title}</Text>
                <Text variant="h5">Completed: {completed.toString()}</Text>
            </DetailsBox>
        </TodoItemContainer>
    )
}

export default TodosItem

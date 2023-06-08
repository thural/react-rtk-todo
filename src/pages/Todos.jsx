import { useGetAllTodosQuery } from '../store/api/todosApi'
import TodosList from '../components/TodosList/TodosList'

const Todos = () => {
    const { data, isError, isFetching } = useGetAllTodosQuery('todos')
    const value = { data, isError, isFetching }

    return <TodosList value={value} />
}

export default Todos

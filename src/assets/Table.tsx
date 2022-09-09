import React from 'react'

const Table = (props: any) => {
  return (
    <div>
      <h1>ToDo リスト</h1>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>コメント</td>
            <td>状態</td>
          </tr>
        </thead>
        {
          props.radio === "all"?
          <tbody>
          {props.todoList.map((todo: any,index: any) => (
            <tr>
              <td>{index}</td>
              <td>{todo.comment}</td>
              <td><button onClick={() => props.onClickSwitch(index)}>{todo.status}</button></td>
              <td><button onClick={() => props.onClickDelete(index)}>削除</button></td>
            </tr>
          ))}
        </tbody>
        :
        <tbody>
          {props.filteredTodoList.map((todo: any, index: any) => (
            <tr>
              <td>{index}</td>
              <td>{todo.comment}</td>
              <td><button onClick={() => props.onClickSwitch(index)}>{todo.status}</button></td>
              <td><button onClick={() => props.onClickDelete(index)}>削除</button></td>
            </tr>
          ))}
        </tbody>
        }
      </table>
    </div>
  )
}

export default Table
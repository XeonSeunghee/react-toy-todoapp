import { useState } from "react";
// 메인 컴포넌트, 페이지UI/기능의 중심
export default function App() {
  //상태 정의
  const [text, setText] = useState(""); // 입력값
  const [todos, setTodos] = useState([]); // 할일 목록

  // 할일 추가 
  const addTodo = (e) => {
    e.preventDefault();
    const value = text.trim();
    if(!value) {
      alert("할일을 입력하세요.");
      return;
    }
    setTodos((prev)=>[...prev,{id:crypto.randomUUID, text: value, done:false}]);
    setText(""); // 현재 행 초기화
  }

  // 완료 체크 토글
  const toggle = (id) => 
    setTodos((prev)=>{
      return prev.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)
    })
  
  // 삭제 체크 토글
  const remove = (id) => 
    setTodos((prev)=>{
      return prev.filter(todo => todo.id !== id)
    })
  
  return (
    <div style={{maxWidth: 500,margin: "4em auto"}}> 
      <h1>TODO</h1>
      {/* 입력 폼 */}
      <form onSubmit={addTodo}>
        <input value={text} onChange={(e)=> setText(e.target.value)}></input>
        <button type="submit" style={{margin: " .5em"}}>추가</button>
      </form>

      {/* 목록 */}
      <ul>
        {todos.map(({id, text, done})=>(
          <li key={id}>
            <input type="checkbox" checked={done} onChange={() => toggle(id)}/>
            <span style={{textDecoration: done ? "line-through" : "none"}}>{text}</span>
            <button style={{margin: " .5em"}} onClick={() => remove(id)}>삭제</button>
          </li>
         ))}
      </ul>
    </div>
  );
}

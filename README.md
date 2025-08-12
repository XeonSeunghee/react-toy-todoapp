# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

1. 데이터 흐름 개요
[사용자 입력] → [이벤트 핸들러] → [상태(State) 업데이트] → [렌더링(Render)] → [UI 반영]
    -> React에서는 이 흐름이 항상 한 방향(단방향 데이터 흐름)으로만 갑니다.
2. 할일 추가 흐름
    1. 입력 단계 
        - 사용자가 <input>에 글을 씀 
        - onChange -> setText(e.target.value) 실행
        - text 상태가 업데이트됨 -> 컴포넌트 재렌더링
    2. 등록 단계
        - form 제출 -> onSubmit -> addTodo 실행
        - text의 현재 값과 기존 todos 배열을 합쳐 새 배열 생성
        - setTodos(newArray)로 업데이트
        - text는 다시 빈 문자열로 세팅 (setText(""))
        - 상태가 변했으니 컴포넌트 재렌더링
        - 브라우저에 새 할일이 나타남
3. 체크박스 토글 흐름
    1. 체크박스 클릭 -> onChagne{()=>toggle(id)}
    2. toggle 함수에서 todos를 map 돌려 해당 id의 done 값 반전
    3. 새배열을 setTodos로 저장
    4. 상태가 바뀌었으니 해당 Todo 항목만 ui 갱신
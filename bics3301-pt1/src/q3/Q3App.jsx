// QUESTION 3 (hard, 25 marks) · every URL that starts with /q3
// Your task paper tells you what to build. Write all your Q3 code in this folder (src/q3/).
//
// App.jsx sends /q3 and everything under it here (its route is "q3/*").
// So you can put your own <Routes> inside this component. Paths here are RELATIVE to /q3:
//
//   <Routes>
//     <Route index element={...} />              → /q3
//     <Route path="something/:id" element={...} /> → /q3/something/5
//   </Routes>
//
// Reminders (Weeks 3–4):
//   - custom hook: a function named useSomething that calls other hooks; fetch in useEffect
//   - Context: createContext → a Provider component that owns the state → a useX() hook to read it
//   - useParams() reads :id from the URL; useNavigate() changes page from code
//   - src/shared/useLocalStorage.js and src/shared/Status.jsx are ready for you to import

function Q3App() {
  return (
    <section>
      <h1>Question 3</h1>
      <p className="muted">Not started yet.</p>
      {/* TODO: build Question 3 here */}
    </section>
  )
}

export default Q3App

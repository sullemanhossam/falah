import "./index.css";
import { AuthLoading, Unauthenticated, Authenticated } from "convex/react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import OnboardingLayout from "./pages/onboarding/layout";
import Employees from "./pages/onboarding/employees";
import CompanyType from "./pages/onboarding/company-type";
import Spinner from "./loading";
import Redirect from "./wildcard";

export default function App() {
  return (
    <BrowserRouter>
      <AuthLoading>
      <Spinner/>
      </AuthLoading>
      <Unauthenticated>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Unauthenticated>
      <Authenticated>
        <Routes>
          {/* onboarding */}
           <Route element={<OnboardingLayout />}>
           <Route path="organization/onboarding/company-type" element={<CompanyType />} />
           <Route path="organization/onboarding/employees" element={<Employees />} />
           </Route>
           
    
            /this wilcard wrapper recieves the user upon authenticating and directs them to their respected area
          <Route path="/*" element={<Redirect/>} />
        </Routes>
      </Authenticated>
    </BrowserRouter>
  );
}

// // For demo purposes. In a real app, you'd have real user data.
// const NAME = getOrSetFakeName();

// export default function App() {
//   const messages = [
//     { _id: "1", user: "Alice", body: "Good morning!" },
//     { _id: "2", user: NAME, body: "Beautiful sunrise today" },
//   ];
//   // TODO: Add mutation hook here.
//   const sendMessage = useMutation(api.chat.sendMessage);
//   const [newMessageText, setNewMessageText] = useState("");

//   useEffect(() => {
//     // Make sure scrollTo works on button click in Chrome
//     setTimeout(() => {
//       window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
//     }, 0);
//   }, [messages]);

//   return (
//     <main className="chat">
//       <header>
//         <h1>Convex Chat</h1>
//         <p>
//           Connected as <strong>{NAME}</strong>
//         </p>
//       </header>
//       {messages?.map((message) => (
//         <article
//           key={message._id}
//           className={message.user === NAME ? "message-mine" : ""}
//         >
//           <div>{message.user}</div>

//           <p>{message.body}</p>
//         </article>
//       ))}
//       <form
//         onSubmit={async (e) => {
//           e.preventDefault();

//            // Replace "alert("Mutation not implemented yet");" with:
//           await sendMessage({ user: NAME, body: newMessageText });

//           setNewMessageText("");
//         }}
//       >
//         <input
//           value={newMessageText}
//           onChange={async (e) => {
//             const text = e.target.value;
//             setNewMessageText(text);
//           }}
//           placeholder="Write a message…"
//           autoFocus
//         />
//         <button type="submit" disabled={!newMessageText}>
//           Send
//         </button>
//       </form>
//     </main>
//   );
// }

// function getOrSetFakeName() {
//   const NAME_KEY = "tutorial_name";
//   const name = sessionStorage.getItem(NAME_KEY);
//   if (!name) {
//     const newName = faker.person.firstName();
//     sessionStorage.setItem(NAME_KEY, newName);
//     return newName;
//   }
//   return name;
// }

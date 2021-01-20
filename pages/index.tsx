import { signIn, signOut, useSession } from "next-auth/client";
import TodoList from "../components/TodoList";
import NewTodoForm from "../components/NewTodoForm";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <>
      {!session && (
        <>
          サインインしてください。 <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          サインイン完了。 email: {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
          <NewTodoForm />
          <TodoList />
        </>
      )}
    </>
  );
}
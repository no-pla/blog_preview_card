import Card from "./components/Card";
import PostDescription from "./components/PostDescription";
import UserInfo from "./components/UserInfo";

export default function Home() {
  return (
    <main className="bg-yellow h-screen flex justify-center items-center">
      <Card>
        <PostDescription />
        <UserInfo />
      </Card>
    </main>
  );
}

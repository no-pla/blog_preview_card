import Card from "./components/Card";
import PostDescription from "./components/PostDescription";
import PostImage from "./components/PostImage";
import UserInfo from "./components/UserInfo";

export default function Home() {
  return (
    <main className="bg-yellow h-screen flex justify-center items-center">
      <Card>
        <PostImage />
        <PostDescription />
        <UserInfo />
      </Card>
    </main>
  );
}

import Card from "./components/Card";
import PostDescription from "./components/PostDescription";

export default function Home() {
  return (
    <main className="bg-yellow h-screen flex justify-center items-center">
      <Card>
        <PostDescription />
      </Card>
    </main>
  );
}

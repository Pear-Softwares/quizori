import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";

import { auth} from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();
  if (!userId) {
    redirect("/dashboard");
  }
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Quizorithm 🔥!</CardTitle>
          <CardDescription>
            Quizorithm is a platform for creating quizzes using AI!. Get started by
            loggin in above!
          </CardDescription>
        </CardHeader>
        <CardContent>
         
        </CardContent>
      </Card>
    </div>
  );
}

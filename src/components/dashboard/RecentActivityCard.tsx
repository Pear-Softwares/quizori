import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { auth} from "@clerk/nextjs";
import { redirect } from "next/navigation";
import HistoryComponent from "../HistoryComponent";
import { prisma } from "@/lib/db";
type Props = {};

const RecentActivityCard = async (props: Props) => {
  const { userId } = auth();
  if (!userId) {
   redirect("/");
  }
  const games_count = await prisma.game.count({
    where: {
      userId: userId,
    },
  });
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          <Link href="/history">Recent Activity</Link>
        </CardTitle>
        <CardDescription>
          You have played a total of {games_count} quizzes.
        </CardDescription>
      </CardHeader>
      <CardContent className="max-h-[580px] overflow-scroll">
        <HistoryComponent limit={10} userId={userId} />
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;

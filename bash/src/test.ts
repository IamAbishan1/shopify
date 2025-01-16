import { LandPlot, Users,MessagesSquare, } from "lucide-react";

const Dashboard = () => {
  return ( 
    <>
    <div className="flex flex-col md:flex-row mx-10
    justify-between gap-5 mb-5">
      <DashboardCard 
        title="Properties" 
        count={5} icon={
        <LandPlot className="text-slate-500" size={72}/>
      }/>
      <DashboardCard 
        title="Members" 
        count={5} icon={
        <Users className="text-slate-500" size={72}/>
      }/>
      <DashboardCard 
        title="Messages" 
        count={5} icon={
        <MessagesSquare className="text-slate-500" size={72}/>
      }/>
    </div>
    <MessageTable title="Latest Messages" />
    </>
   );
}

import { Card,CardContent } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps{
    title: string,
    count: number,
    icon: React.ReactElement<LucideIcon>
}

const DashboardCard = ({title, count, icon }: DashboardCardProps) => {
    return <Card className="bg-slate-100 dark:bg-slate-880 p-4 pb-0">
        <CardContent>
            <h3 className="text-3xl text-center mb-4 font-bold
            text-slate-500 dark:text-slate-300">
                {title}
            </h3>
            <div className="flex gap-5 justify-center items-center">
                {icon}
                <h3 className="text-5xl font-semibold text-slate-500 
                dark:text-slate-200">
                    {count}
                </h3>
            </div>
        </CardContent>
    </Card>
}

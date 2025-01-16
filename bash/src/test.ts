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

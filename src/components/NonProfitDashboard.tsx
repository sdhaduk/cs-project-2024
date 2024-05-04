"use client";

import { useState, useEffect } from "react";
import MediaCard from "@/components/NonProfitCard";

type Props = {};

const Dashboard = (props: Props) => {
  const [requests, setRequests] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/getRequests");
      const newData = await response.json();
      setRequests(newData.userRequests);
    };
    fetchData();
  }, []);

  return (
    <div> 
      {requests ? (
        <div className="mt-10 mx-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {requests.map((request) => (
            <MediaCard key={request._id} request={request} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <h2 className="text-4xl dark:text-white">
            You havent made any requests!
          </h2>
        </div>
      )}
    </div>
  );
};
export default Dashboard;

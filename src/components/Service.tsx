import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { Play } from "lucide-react";

interface Props {
  service: string;
  url: string;
  icon: React.ReactNode;
  summary: string;
}

const Service: FC<Props> = ({ service, url, icon, summary }) => {
  return (
    <>
      <div className="grid grid-cols-1 divide-y text-white">
        <div>
          <div className="mb-4 flex flex-col items-start text-bronze">{icon}</div>
          <div className="flex flex-row items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl">{service}</h2>
            <Link href={`/services/${url}`}>
              <Play className="hover:text-bronze"/>
            </Link>
          </div>
        </div>
        <p className="text-base pt-4">{summary}</p>
      </div>
    </>
  );
};

export default Service;

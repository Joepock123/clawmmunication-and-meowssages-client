"use client";

import useSWR from "swr";

import Button from "@/components/ui/Button";
import { NextDeliveryComms } from "@/types/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function WelcomePage({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;
  const { data, error } = useSWR<NextDeliveryComms | null>(
    `http://localhost:3001/comms/your-next-delivery/${userId}`,
    fetcher
  );

  if (error) return <div>Failed to load delivery details</div>;
  if (!data) return <div>Loading...</div>;

  const { title, message, totalPrice, freeGift } = data;

  return (
    <div className="flex justify-center m-6">
      <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg p-6 w-full relative">
        {freeGift && (
          <div className="absolute top-2 right-2 bg-purple-100 text-purple-700 text-xs font-bold py-1 px-2 rounded">
            FREE GIFT
          </div>
        )}
        <div className="mr-4">
          <img
            src="/cat-1.png"
            alt="Cat"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-base font-normal mb-4">{message}</p>
          <div className="text-lg font-bold mb-4">
            Total price: £{totalPrice?.toFixed(2)}
          </div>
          <div className="flex space-x-4">
            <Button>SEE DETAILS</Button>
            <Button variant="secondary">EDIT DELIVERY</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

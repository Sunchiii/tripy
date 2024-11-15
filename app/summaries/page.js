"use client"

import { Button } from "@/components/ui/button";

export default function Summaries() {
    const dataActivities = [
        { name: 'Activities 1', count: 15 },
        { name: 'Activities 1', count: 10 },
        { name: 'Activities 1', count: 8 },
    ];

    const dataSeats = [
        { seat: 'available 1', count: 0 },
        { seat: 'available 2', count: 0 },
        { seat: 'available 3', count: 1 },
        { seat: 'available 4', count: 5 },
        { seat: "I'll go with the girl.", count: 9 }
    ];

    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]

    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#2563eb",
        },
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        },
    }

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-2">Tour Vangvieng</h1>
            <p className="text-gray-600 mb-4">
                Vangvieng tour guide inquiry form from November 30 to December 1, 2024
            </p>
            <Button className=" text-white px-4 py-2 rounded mb-6">
                Register now
            </Button>
            <div className="flex">
                <div className="bg-gray-100 p-2 m-1 rounded flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="text-xl">
                            <span role="img" aria-label="User">👤</span>
                        </div>
                        <div></div>
                    </div>
                    <div className="text-xl font-bold">24</div>
                </div>
                <div className="bg-gray-100 p-2 m-1 rounded flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="text-xl">
                            <span role="img" aria-label="Car">🚗</span>
                        </div>
                        <div></div>
                    </div>
                    <div className="text-2xl font-bold">5</div>
                </div>
            </div>

            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Activities want to do</h2>
                {/* <ChartContainer>
                    <BarChart data={data}>
                        <Bar dataKey="value" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                    </BarChart>
                </ChartContainer> */}
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-2">Seats are available in car</h2>
                {dataSeats.map((seat, index) => (
                    <div key={index} className="flex justify-between items-center mb-2 bg-gray-200 p-2 rounded">
                        <span>{seat.seat}</span>
                        <span className="bg-gray-400 text-white px-2 py-1 rounded">{seat.count}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
import { Card, Heading } from "../shared";
import { Chart } from "./chart";

/**
 * Dashboard card used in the home page bento grid.
 */
export const Dashboard = () => {
    return (
        <Card link="/dashboard" className="lg:flex-1">
            <Heading title="Dashboard" description="View some stats about my dev activity." className="max-w-[220px]" />
            <Chart />
        </Card>
    );
};

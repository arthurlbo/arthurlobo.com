import { Button } from "@repo/design-system/components";
import { TablerIcon } from "@tabler/icons-react";

interface IIconButtonProps {
    icon: TablerIcon;
}

export const IconButton = ({ icon: Icon }: IIconButtonProps) => {
    return (
        <Button className="border-surface-500 hover:border-accent-500 text-primary-100 h-10 w-10 shrink-0 rounded-full border bg-transparent p-0 transition-all duration-300 ease-in-out">
            <Icon className="h-5 w-5" />
        </Button>
    );
};

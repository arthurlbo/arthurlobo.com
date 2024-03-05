interface CopyProps {
    section?: string;
}

/**
 * Copy component.
 */
export const Copy = ({ section = "" }: CopyProps) => {
    return (
        <span data-testid={`copy-${section}`} className="text-sm font-semibold text-secondary">
            Made with 🤍 by Arthur
        </span>
    );
};

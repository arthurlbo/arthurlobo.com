"use client";

import { Activity } from "react";

import { cn } from "@/shared/utils";
import {
    Field,
    FieldError,
    FieldLabel,
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupTextarea,
} from "@repo/design-system/components";
import { TablerIcon } from "@tabler/icons-react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface IProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label?: string;
    placeholder?: string;
    rightIcon?: TablerIcon;
    isTextArea?: boolean;
    inputClassName?: string;
    rightIconClassName?: string;
    inputGroupClassName?: string;
}

export const Input = <T extends FieldValues>({
    name,
    control,
    label,
    placeholder,
    inputClassName,
    rightIconClassName,
    inputGroupClassName,
    isTextArea = false,
    rightIcon: RightIcon,
}: IProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <Activity mode={label ? "visible" : "hidden"}>
                        <FieldLabel htmlFor={field.name} className="text-primary-100">
                            {label}
                        </FieldLabel>
                    </Activity>

                    <InputGroup
                        className={cn(
                            "border-surface-500 hover:border-accent-500 py-2 transition-all duration-300 ease-in-out",
                            isTextArea ? "h-auto items-start" : "h-10 items-center",
                            inputGroupClassName,
                        )}
                    >
                        {isTextArea ? (
                            <InputGroupTextarea
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                autoComplete="off"
                                placeholder={placeholder}
                                className={cn(
                                    "placeholder:text-primary-400 text-primary-100 min-h-32 resize-y py-0 pt-0.5",
                                    inputClassName,
                                )}
                            />
                        ) : (
                            <InputGroupInput
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                autoComplete="off"
                                placeholder={placeholder}
                                className={cn("placeholder:text-primary-400 text-primary-100", inputClassName)}
                            />
                        )}

                        {RightIcon && (
                            <InputGroupAddon>
                                <RightIcon
                                    className={cn(
                                        "text-primary-100 size-4",
                                        rightIconClassName,
                                        fieldState.invalid && "text-destructive",
                                    )}
                                />
                            </InputGroupAddon>
                        )}
                    </InputGroup>

                    <Activity mode={fieldState.invalid ? "visible" : "hidden"}>
                        <FieldError errors={[fieldState.error]} />
                    </Activity>
                </Field>
            )}
        />
    );
};

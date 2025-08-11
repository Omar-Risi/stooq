import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type TextInputContainerProps = {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    value: string;
    onChange: (value: string) => void;
    error?: string;
};

function TextInputContainer({
    name,
    label,
    type = "text",
    placeholder,
    required = false,
    value,
    onChange,
    error,
}: TextInputContainerProps) {
    return (
        <div className="flex flex-col mt-4">
            <Label htmlFor={name} className="">
                {label}
                {required && <span className="text-red-500">*</span>}
            </Label>
            <Input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="mt-2"
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
}

type FileInputContainerProps = {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    accept?: string;
};

function FileInputContainer({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
    value,
    onChange,
    error,
    accept
}: FileInputContainerProps) {
    return (
        <div className="flex flex-col mt-4">
            <Label htmlFor={name} className="">
                {label}
                {required && <span className="text-red-500">*</span>}
                &nbsp;
                ({accept})
            </Label>
            <Input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="mt-2"
                accept={accept}
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
}



type PrefixInputContainerProps = {
    name: string;
    label: string;
    prefix: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    value: string;
    onChange: (value: string) => void;
    error?: string;
};

function PrefixInputContainer({
    name,
    label,
    prefix,
    type = "text",
    placeholder,
    required = false,
    value,
    onChange,
    error,
}: PrefixInputContainerProps) {
    return (
        <div className="flex flex-col mt-4">
            <Label htmlFor={name}>
                {label}
                {required && <span className="text-red-500">*</span>}
            </Label>

            <div className="flex mt-2">
                {/* Prefix box */}
                <span className="inline-flex items-center px-3 ltr:rounded-l-md rtl:rounded-r-md border border-input bg-muted text-gray-500 text-sm">
                    {prefix}
                </span>

                {/* Input field */}
                <Input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="ltr:rounded-l-none rtl:rounded-r-none"
                />
            </div>

            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
}


type RadioOption = {
    label: string;
    value: string;
};

type RadioInputContainerProps = {
    name: string;
    label: string;
    required?: boolean;
    options: RadioOption[];
    value: string;
    onChange: (value: string) => void;
    error?: string;
};

export default function RadioInputContainer({
    name,
    label,
    required = false,
    options,
    value,
    onChange,
    error,
}: RadioInputContainerProps) {
    return (
        <div className="flex flex-col mt-4">
            <Label className="">
                {label}
                {required && <span className="text-red-500">*</span>}
            </Label>
            <div className="flex flex-col gap-2 mt-1">
                {options.map((option) => (
                    <label
                        key={option.value}
                        htmlFor={`${name}_${option.value}`}
                        className="flex items-center gap-2 text-sm"
                    >
                        <Input
                            required={required}
                            type="radio"
                            id={`${name}_${option.value}`}
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={(e) => onChange(e.target.value)}
                            className="w-4 h-4 shadow-none"
                        />
                        <span>{option.label}</span>
                    </label>
                ))}
            </div>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
}

type SelectOption = {
    label: string;
    value: string;
};

type SelectContainerProps = {
    name: string;
    label: string;
    required?: boolean;
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    error?: string;
};

function SelectContainer({
    name,
    label,
    required = false,
    options,
    value,
    onChange,
    error,
}: SelectContainerProps) {
    return (
        <div className="flex flex-col mt-4">
            <Label htmlFor={name}>
                {label}
                {required && <span className="text-red-500">*</span>}
            </Label>
            <select
                id={name}
                name={name}
                required={required}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full border rounded p-2 mt-2"
            >
                <option value="">Select {label.toLowerCase()}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
}

export {
    TextInputContainer,
    FileInputContainer,
    PrefixInputContainer,
    RadioInputContainer,
    SelectContainer
}

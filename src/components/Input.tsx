import React, { useEffect, useRef } from "react";

type Props = {
  label: string;
  name: string;
  id: string;
  value: string;
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email";
  error?: string;
};

export default function Input({
  value,
  onChange,
  name,
  id,
  label,
  defaultValue,
  error,
  type = "text",
}: Props) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (defaultValue) {
      ref.current.value = defaultValue;
    }
  }, [defaultValue]);

  return (
    <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between md:gap-5">
      <label
        htmlFor={id}
        className={`text-muted ${type !== "email" ? "after:content-['*']" : ""}`}
      >
        {label}
      </label>
      <div className="flex flex-col">
        <input
          ref={ref}
          type={type}
          name={name}
          id={id}
          className={`custom-input-shadow rounded-md border bg-gray-50 p-2 transition-colors focus:outline-none ${type === "email" ? "invalid:border-rose-500 focus:valid:border-primary" : "focus:border-primary"} ${error ? "border-rose-500" : "border-gray-200"}`}
          placeholder={label}
          value={value}
          onChange={onChange}
        />

        {error && <p className="text-sm text-rose-500">{error}</p>}
      </div>
    </div>
  );
}

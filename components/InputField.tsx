import React from "react";

type InputFieldProps = {
  label?: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export default function InputField({
  label,
  type = "text",
  as = "input",
  rows = 4,
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="label font-medium">{label}</label>}
      {as === "textarea" ? (
        <textarea
          className="textarea w-full"
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
        />
      ) : (
        <input
          type={type}
          className="input w-full"
          placeholder={placeholder}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
        />
      )}
    </div>
  );
}

import React from "react";

export function Btn({
  onClick, active = false, disabled = false, title, children,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onMouseDown={(e) => { e.preventDefault(); onClick(); }}
      disabled={disabled}
      title={title}
      aria-label={title}
      aria-pressed={active}
      className={[
        "flex h-7 min-w-[28px] items-center justify-center rounded px-1.5 text-[13px] transition-colors duration-100 select-none outline-none",
        active
          ? "bg-[#0F4C81] text-white"
          : "text-gray-500 hover:bg-gray-100 hover:text-gray-800",
        disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export function Sep() {
  return <div className="mx-0.5 h-5 w-px shrink-0 bg-gray-200" />;
}

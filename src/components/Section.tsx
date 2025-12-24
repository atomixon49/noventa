import React from "react";

export function Section({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      {...props}
      className={"mx-auto w-full max-w-6xl px-4 sm:px-6 " + className}
    >
      {children}
    </section>
  );
}

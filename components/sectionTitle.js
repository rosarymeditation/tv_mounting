import React from "react";
import Container from "./container";

export default function SectionTitle({ pretitle, title, children, align }) {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${align === "left" ? "" : "items-center justify-center text-center"
        }`}
    >
      {/* Pretitle */}
      {pretitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {pretitle}
        </div>
      )}

      {/* Title */}
      {title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {title}
        </h2>
      )}

      {/* Description / Children (safe wrapper) */}
      {children && (
        <div className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {children}
        </div>
      )}
    </Container>
  );
}

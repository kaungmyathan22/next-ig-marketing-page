import React, { InputHTMLAttributes } from "react";

interface ContainerProps extends InputHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <div {...props} className={`max-w-6xl mx-auto ${props.className ?? ""}`}>
      {children}
    </div>
  );
};

export default Container;

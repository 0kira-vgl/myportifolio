import { ReactNode } from "react";

export default function IntroductionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

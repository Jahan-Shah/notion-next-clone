"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { MenuIcon } from "lucide-react";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { useMediaQuery } from "usehooks-ts";

import { Title } from "./title";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

export const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const params = useParams();
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  const shouldShowNav = useMemo(
    () => (isMobile && isCollapsed) || !isMobile,
    [isCollapsed, isMobile],
  );

  if (document === undefined)
    return (
      <nav className="flex w-full items-center gap-x-4 bg-background px-3 py-2 dark:bg-[#1f1f1f]">
        <Title.Skeleton />
      </nav>
    );
  if (document === null) return null;

  return (
    <>
      {shouldShowNav && (
        <nav className="flex w-full items-center gap-x-4 bg-background px-3 py-2 dark:bg-[#1f1f1f]">
          {isCollapsed && (
            <MenuIcon
              role="button"
              onClick={onResetWidth}
              className="h-6 w-6 text-muted-foreground"
            />
          )}
          <div className="flex items-center">
            <Title initialData={document} />
          </div>
        </nav>
      )}
    </>
  );
};

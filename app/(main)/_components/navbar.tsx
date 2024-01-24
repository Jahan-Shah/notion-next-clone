"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { MenuIcon } from "lucide-react";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { useMediaQuery } from "usehooks-ts";

import { Banner } from "./banner";
import { Menu } from "./menu";
import { Publish } from "./publish";
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
      <nav className="flex w-full items-center justify-between gap-x-4 bg-background px-3 py-2 dark:bg-[#1f1f1f]">
        <Title.Skeleton />
        <div className="flex items-center gap-x-2">
          <Menu.Skeleton />
        </div>
      </nav>
    );
  if (document === null) return null;

  return (
    <>
      {shouldShowNav && (
        <>
          <nav className="flex w-full items-center gap-x-4 bg-background px-3 py-2 dark:bg-[#1f1f1f]">
            {isCollapsed && (
              <MenuIcon
                role="button"
                onClick={onResetWidth}
                className="h-6 w-6 text-muted-foreground"
              />
            )}
            <div className="flex w-full items-center justify-between">
              <Title initialData={document} />
              <div className="flex items-center gap-x-2">
                <Publish initialData={document} />
                <Menu documentId={document._id} />
              </div>
            </div>
          </nav>
          {document.isArchived && (
            <Banner
              documentId={document._id}
              documentCover={document.coverImg}
            />
          )}
        </>
      )}
    </>
  );
};

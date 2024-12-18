"use client";

import { Project } from "@/sanity.types";
import React from "react";
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Image from "next/image";
import ChipComponent from "@/app/components/chip";
import clsx from "clsx";
import Link from "next/link";

const TableView = ({ data }: { data: Project[] }) => {
  return (
    <Table
      isHeaderSticky
      aria-label="Project Lists"
      classNames={{
        base: "overflow-scroll flex flex-1 flex-grow",
        wrapper: clsx(
          "shadow-none bg-transparent border-0 rounded-none flex flex-col flex-1"
        ),
        emptyWrapper: "flex flex-1 flex-grow flex-col",
        th: "bg-slate-950 overflow-hidden",
      }}
    >
      <TableHeader className="font-semibold text-xl">
        <TableColumn
          key="projectName"
          className="text-slate-100 text-xl font-bold text-center"
        >
          Preview
        </TableColumn>
        <TableColumn
          key="name"
          className="text-slate-100 text-xl font-bold text-center"
        >
          Name
        </TableColumn>
        <TableColumn
          key="platform"
          className="text-slate-100 text-xl font-bold text-center"
        >
          Platform
        </TableColumn>
        <TableColumn
          key="built_with"
          className="text-slate-100 text-xl font-bold text-center"
        >
          Built With
        </TableColumn>
        <TableColumn
          key="link"
          className="text-slate-100 text-xl font-bold text-center"
        >
          Link
        </TableColumn>
      </TableHeader>
      <TableBody items={data} loadingContent={<Spinner label="Loading..." />}>
        {(item) => (
          <TableRow key={item.projectName}>
            <TableCell>
              {item.image_url && (
                <Image
                  src={item.image_url as string}
                  height={30}
                  width={50}
                  className="object-contain size-fit shadow-sm rounded-sm group-hover:border-2 group-hover:border-slate-600"
                  alt={item.preview?.attribution as string}
                />
              )}
            </TableCell>
            <TableCell>
              <p className="text-slate-100 text-xl font-semibold text-center">
                {item.projectName}
              </p>
            </TableCell>
            <TableCell>
              <p className="text-slate-100 text-lg font-semibold text-center">
                {item.platform}
              </p>
            </TableCell>
            <TableCell>
              <div className="flex flex-row gap-4 flex-wrap">
                {item.technologies_used?.map(
                  (technology: Record<string, string>) => {
                    return (
                      <ChipComponent
                        className="px-1 py-1 lg:text-sm text-sm"
                        key={technology.built_with}
                        tag={technology.built_with}
                      />
                    );
                  }
                )}
              </div>
            </TableCell>
            <TableCell>
              {item.link && (
                <Link
                  href={item.link as string}
                  className="text-md text-center"
                >
                  {item.link}
                </Link>
              )}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableView;

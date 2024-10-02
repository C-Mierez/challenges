"use client";

import { Category } from "@/shared/types";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export function CategoriesRoot({
    categories,
    parentCategoryId,
}: {
    categories: Category[];
    parentCategoryId?: string;
}) {
    const toRender = categories.filter((category) => {
        return category.parentCategoryId === parentCategoryId;
    });

    return (
        <ul>
            {toRender.map((category) => {
                return <CategoriesItem key={category.id} categories={categories} category={category} />;
            })}
        </ul>
    );
}

function CategoriesItem({ categories, category }: { categories: Category[]; category: Category }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const canExpand = categories.find((c) => c.parentCategoryId === category.id) !== undefined;

    return (
        <>
            <li className="ml-4 my-2" key={`${category.id}li`}>
                <div className="flex gap-2 items-center">
                    {canExpand && (
                        <div
                            className="cursor-pointer bg-white text-black font-black flex justify-center h-6 w-6"
                            onClick={() => {
                                setIsExpanded(!isExpanded);
                            }}
                        >
                            {isExpanded ? "-" : "+"}
                        </div>
                    )}
                    <Link href={`/${category.id}`}>
                        <h2>{category.name}</h2>
                    </Link>
                </div>
                {isExpanded && <CategoriesRoot categories={categories} parentCategoryId={category.id} />}
            </li>
        </>
    );
}

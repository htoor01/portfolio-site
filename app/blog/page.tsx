"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function BlogContent() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    const categoryTitle = category
        ? category.charAt(0).toUpperCase() + category.slice(1)
        : "All Posts";

    return (
        <main className="flex flex-col items-center p-8">
            <div className="max-w-4xl w-full">
                <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                    {category ? `${categoryTitle} Articles` : "Haaris's Blog"}
                </h1>
                <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
                    Thoughts on technology, economics, history, and more.
                </p>

                <div className="flex justify-center gap-4 mb-8">
                    <a
                        href="/blog"
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            !category
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                        }`}
                    >
                        All
                    </a>
                    <a
                        href="/blog?category=tech"
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            category === "tech"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                        }`}
                    >
                        Tech
                    </a>
                    <a
                        href="/blog?category=economics"
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            category === "economics"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                        }`}
                    >
                        Economics
                    </a>
                    <a
                        href="/blog?category=history"
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            category === "history"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                        }`}
                    >
                        History
                    </a>
                </div>

                <div className="text-center py-16 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Coming Soon!</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Blog posts are on their way. Check back soon for articles on tech, economics, and history!
                    </p>
                </div>
            </div>
        </main>
    );
}

export default function BlogPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <BlogContent />
        </Suspense>
    );
}
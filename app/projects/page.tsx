"use client";

import { useEffect, useState } from "react";
import ProjectCardGeneral from "@/components/ProjectCard/ProjectCardGeneral";

interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
    topics: string[];
}

export default function ProjectsPage() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const response = await fetch('https://api.github.com/users/htoor01/repos?sort=updated&per_page=100');
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                const publicRepos = data.filter((repo: GitHubRepo) => 
                    !repo.private && repo.name.toLowerCase() !== 'htoor01'
                );
                setRepos(publicRepos);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                setLoading(false);
            }
        }

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <main className="flex flex-col items-center p-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Loading projects...</h1>
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="flex flex-col items-center p-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-red-600">Error: {error}</h1>
                </div>
            </main>
        );
    }

    return (
        <main className="flex flex-col items-center p-8">
            <div className="max-w-6xl w-full">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">My Projects</h1>
                <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
                    Here are all my public repositories from GitHub. Check them out!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((repo) => (
                        <ProjectCardGeneral
                            key={repo.id}
                            name={repo.name}
                            description={repo.description}
                            language={repo.language}
                            stars={repo.stargazers_count}
                            forks={repo.forks_count}
                            url={repo.html_url}
                            topics={repo.topics || []}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
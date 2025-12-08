import Link from "next/link";

interface ProjectCardGeneralProps {
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    url: string;
    topics: string[];
}

export default function ProjectCardGeneral({
    name, description, language, stars, forks, url, topics
}: ProjectCardGeneralProps) {
    return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{name}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{description || "No description available"}</p>
            
            {topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {topics.map((topic, index) => (
                        <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                            {topic}
                        </span>
                    ))}
                </div>
            )}
            
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                {language && (
                    <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                        {language}
                    </span>
                )}
                <span>⭐ {stars}</span>
                <span>🍴 {forks}</span>
            </div>
            
            <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
                View on GitHub
            </a>
        </div>
    );
}
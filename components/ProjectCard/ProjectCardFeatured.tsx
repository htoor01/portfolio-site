import Link from "next/link";

interface ProjectCardFeaturedProps {
    title: string;
    githubLink: string;
    description: string;
    imageUrl: string;
}

export default function ProjectCardFeatured({
    title, githubLink, description, imageUrl }: ProjectCardFeaturedProps) {
    return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200">
            <img src={imageUrl} alt={`screenshot of ${title}`} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
            <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                View on GitHub
            </Link>
        </div>
    );
}
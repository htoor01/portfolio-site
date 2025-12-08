"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [captchaAnswer, setCaptchaAnswer] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const emojis = ["😀", "😡", "😢", "🤔", "😴"];
    const correctEmoji = "😀";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (captchaAnswer !== correctEmoji) {
            setError("Please click the smiley face emoji to verify you're human!");
            return;
        }

        if (!formData.name || !formData.email || !formData.message) {
            setError("Please fill in all fields!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address!");
            return;
        }

        console.log("Form submitted:", formData);
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (submitted) {
        return (
            <main className="flex flex-col items-center p-8">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 max-w-2xl w-full text-center">
                    <h1 className="text-4xl font-bold mb-4 text-green-600 dark:text-green-400">Thank you!</h1>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Your message has been received. I'll get back to you soon!
                    </p>
                    <button 
                        onClick={() => {
                            setSubmitted(false);
                            setFormData({ name: "", email: "", message: "" });
                            setCaptchaAnswer(null);
                        }}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                        Send Another Message
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="flex flex-col items-center p-8">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 max-w-2xl w-full">
                <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Contact Me</h1>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible!
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
                            placeholder="Your message..."
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Click the smiley face to verify you're human:
                        </label>
                        <div className="flex gap-4">
                            {emojis.map((emoji, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setCaptchaAnswer(emoji)}
                                    className={`text-4xl p-4 rounded-lg border-2 transition-all ${
                                        captchaAnswer === emoji
                                            ? "border-green-500 bg-green-50 dark:bg-green-900"
                                            : "border-gray-300 dark:border-gray-600 hover:border-blue-500"
                                    }`}
                                >
                                    {emoji}
                                </button>
                            ))}
                        </div>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 rounded-lg text-red-700 dark:text-red-200">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </main>
    );
}
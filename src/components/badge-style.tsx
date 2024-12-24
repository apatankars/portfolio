/**
 * Returns Tailwind CSS classes for a given technology.
 *
 * @param tech - The name of the technology.
 * @returns A string of Tailwind CSS classes.
 */
const getTechBadgeClasses = (tech: string): string => {
  const techColorMap: { [key: string]: string } = {
    PyTorch: "bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-100",
    TensorFlow:
      "bg-orange-500 text-white dark:bg-orange-700 dark:text-gray-100",
    LSTM: "bg-purple-500 text-white dark:bg-purple-700 dark:text-gray-100",
    NumPy: "bg-blue-400 text-white dark:bg-blue-600 dark:text-gray-100",
    "React.js": "bg-cyan-500 text-white dark:bg-cyan-700 dark:text-gray-100",
    "Next.js": "bg-green-500 text-white dark:bg-green-700 dark:text-gray-100",
    Playwright:
      "bg-purple-400 text-white dark:bg-purple-600 dark:text-gray-100",
    "Random Forest":
      "bg-purple-400 text-white dark:bg-purple-600 dark:text-gray-100",
    "Tailwind CSS":
      "bg-teal-500 text-white dark:bg-teal-700 dark:text-gray-100",
    "GitHub Actions":
      "bg-cyan-500 text-white dark:bg-cyan-700 dark:text-gray-100",
    NLP: "bg-red-500 text-white dark:bg-red-700 dark:text-gray-100",
    Docker: "bg-blue-600 text-white dark:bg-blue-800 dark:text-gray-100",
    PostgreSQL: "bg-blue-700 text-white dark:bg-blue-900 dark:text-gray-100",
    Firebase: "bg-yellow-500 text-white dark:bg-yellow-700 dark:text-gray-100",
    "Software Engineering":
      "bg-green-600 text-white dark:bg-green-800 dark:text-gray-100",
    Figma: "bg-pink-500 text-white dark:bg-pink-700 dark:text-gray-100",

    "RESTful APIs":
      "bg-indigo-500 text-white dark:bg-indigo-700 dark:text-gray-100",
    AGILE: "bg-purple-600 text-white dark:bg-purple-800 dark:text-gray-100",
    TypeScript: "bg-blue-400 text-white dark:bg-blue-600 dark:text-gray-100",
    BeautifulSoup:
      "bg-yellow-400 text-black dark:bg-yellow-600 dark:text-gray-900",
    Java: "bg-red-600 text-white dark:bg-red-800 dark:text-gray-100",
    Python: "bg-green-400 text-white dark:bg-green-600 dark:text-gray-100",
    AWS: "bg-gray-500 text-white dark:bg-gray-700 dark:text-gray-100",
  };

  const normalizedTech = tech.trim();

  return (
    techColorMap[normalizedTech] ||
    "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80"
  );
};

export default getTechBadgeClasses;

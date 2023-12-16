// Assuming this component is used within a React project with Tailwind CSS

const CategoryTag = ({ category }) => {
    const categoryStyles = {
        'Design': 'bg-ghostwhite-200 text-darkblue',
        'Research': 'bg-aliceblue-200 text-darkblue',
        'Presentation': 'bg-pink-50 text-pink-700',
        // Add more categories and their respective styles here
    };

    const style = categoryStyles[category] || 'bg-gray-200 text-gray-800'; // Default style

    return (
        <div className={`rounded-2xl ${style} shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5`}>
            <span className="relative leading-[20px] font-medium">
                {category}
            </span>
        </div>
    );
};

export default CategoryTag;

import React from "react";

const EmptyState = ({ title, description, icon = "📦", action = null }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-64 p-8 text-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md">{description}</p>
      {action &&
        typeof action === "object" &&
        "onClick" in action &&
        "label" in action && (
          <button
            onClick={action.onClick}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {action.label}
          </button>
        )}
    </div>
  );
};

export default EmptyState;

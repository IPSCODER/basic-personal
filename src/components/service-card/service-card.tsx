import React from "react";

interface serviceTypes {
    title: string;
    features: string[];
    plans: { name: string; originalPrice: number; discountedPrice: number }[];
    onSubscribe: () => void;
}


const ServiceCard:React.FC<serviceTypes> = ({ title, features, plans, onSubscribe }) => {
  return (
    <div className="w-full max-w-xs bg-white shadow-lg rounded-lg p-6 flex flex-col gap-3">
      {/* Title */}
      <h1 className="text-xl font-semibold text-primary mb-2">{title}</h1>

      {/* Features List */}
      {features.map((feature, index) => (
        <p key={index} className="text-sm text-gray-700 flex items-center gap-2">
         {feature}
        </p>
      ))}

      {/* Plans */}
      <div className="flex flex-col gap-3 mt-auto mb-5 pt-8">
        {plans.map((plan, index) => (
          <span key={index} className="flex items-center gap-2 text-primary">
            <input type="radio" name="plan" value={plan.name} />
            {plan.name}
            <del className="ml-auto text-xs text-gray-500">RS.{plan.originalPrice}</del>
            <b className="text-sm font-semibold">RS.{plan.discountedPrice}</b>
          </span>
        ))}
      </div>

      {/* Subscribe Button */}
      <button 
        className="w-full bg-secondary text-white py-2 rounded-md hover:bg-opacity-90 transition"
        onClick={onSubscribe}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default ServiceCard;

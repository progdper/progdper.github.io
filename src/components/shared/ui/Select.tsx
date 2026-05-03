import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  className?: string;
  placeholder?: string;
}

/**
 * Select Atom
 * A reusable, styled dropdown component following Atomic Design principles.
 * Glassmorphism style to match the portfolio theme.
 */
const Select: React.FC<SelectProps> = ({ 
  value, 
  onChange, 
  options, 
  className = "",
  placeholder
}) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <select 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-white text-sm font-bold py-2 pl-3 pr-8 rounded-xl appearance-none focus:outline-none cursor-pointer transition-all hover:bg-white/5"
      >
        {placeholder && (
          <option value="" disabled className="bg-[#151518] text-slate-500">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-[#151518] text-white">
            {option.label}
          </option>
        ))}
      </select>
      
      {/* Custom Arrow Icon */}
      <div className="absolute right-2 pointer-events-none text-slate-500">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
};

export default Select;

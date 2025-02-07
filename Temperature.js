// Temperature.js
 
'use client'
 
import { useState } from 'react';
import { celsiusToFahrenheit, fahrenheitToCelsius } from './ConverterForm';
 
export default function TemperatureConverter() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isCelsius, setIsCelsius] = useState(true);
 
  const handleConvert = () => {
    const values = input.split(',').map(v => parseFloat(v.trim()));
    const convertFn = isCelsius ? celsiusToFahrenheit : fahrenheitToCelsius;
    const converted = convertFn(values.length === 1 ? values[0] : values);
    setResult(Array.isArray(converted) ? converted.join(', ') : converted.toFixed(2));
  };
 
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-black text-2xl font-bold mb-4">Temperature Converter</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <input
            type="radio"
            checked={isCelsius}
            onChange={() => setIsCelsius(true)}
            className="mr-2"
          />
          Celsius to Fahrenheit
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <input
            type="radio"
            checked={!isCelsius}
            onChange={() => setIsCelsius(false)}
            className="mr-2"
          />
          Fahrenheit to Celsius
        </label>
      </div>
      <div className="mb-4">
        <input
          className="border rounded w-full py-2 px-3 text-gray-700  focus:outline-none "
          type="text"
          placeholder="Enter value(s)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>
      {result && (
        <div className="mt-4">
          <p className="text-gray-700 text-sm font-bold">Result: {result} {isCelsius ? '°F' : '°C'}</p>
        </div>
      )}
    </div>
  );
}
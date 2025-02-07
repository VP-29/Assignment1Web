//ConverterForm.js
 
const createConverter = (fromUnit, toUnit, conversionFn) => {
  return (value) => {
    if (Array.isArray(value)) {
      return value.map(conversionFn);
    }
    return conversionFn(value);
  };
};
 
export const poundsToKg = createConverter('lb', 'kg', (lb) => lb * 0.453592);
export const kgToPounds = createConverter('kg', 'lb', (kg) => kg * 2.20462);
 
export const milesToKm = createConverter('mi', 'km', (mi) => mi * 1.60934);
export const kmToMiles = createConverter('km', 'mi', (km) => km * 0.621371);
 
export const celsiusToFahrenheit = createConverter('°C', '°F', (c) => (c * 9/5) + 32);
export const fahrenheitToCelsius = createConverter('°F', '°C', (f) => (f - 32) * 5/9);
 
 

 
 

 

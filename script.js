// Function to calculate the mean of an array
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

// Function to calculate the median of an array
const getMedian = (array) => {
  // Sort the array without modifying the original array
  const sorted = array.slice().sort((a, b) => a - b);
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  // Check if the array length is even
  if (array.length % 2 === 0) {
    // If the length is even, return the average of the two middle elements
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  } else {
    // If the length is odd, return the middle element
    return sorted[middleIndex];
  }
};

// Function to calculate the mode (most frequent value) of an array
const getMode = (array) => {
  const counts = {};

  // Calculate the frequency of each element
  array.forEach((el) => (counts[el] = (counts[el] || 0) + 1));

  // If all elements have the same frequency, return null
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }

  // Find the element with the highest frequency
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  const mode = Object.keys(counts).filter((el) => {
    return counts[el] === counts[highest];
  });

  // Return the modes as a comma-separated string
  return mode.join(", ");
};

// Function to calculate the range of an array
const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
};

// Function to calculate the variance of an array
const getVariance = (array) => {
  const mean = getMean(array);
  const variance =
    array.reduce((acc, el) => {
      const difference = el - mean;
      const squared = difference ** 2;
      return acc + squared;
    }, 0) / array.length;
  return variance;
};

// Function to calculate the standard deviation of an array
const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
};

// Function to calculate and display the statistics on the page
const calculate = () => {
  // Get the user input
  const value = document.querySelector("#numbers").value;
  // Transform the string of values into an array of numbers
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));

  // Calculate various statistics
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);

  // Display the results on the page
  document.querySelector("#standardDeviation").textContent = standardDeviation;
  document.querySelector("#variance").textContent = variance;
  document.querySelector("#range").textContent = range;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mean").textContent = mean;
};

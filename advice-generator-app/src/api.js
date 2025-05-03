const URL = "https://api.adviceslip.com/advice";

export const getAdvice = async () => {
  const response = await fetch(`${URL}?t=${Date.now()}`); // Cache buster
  const data = await response.json();
  return data.slip;
};

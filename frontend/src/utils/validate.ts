export const validateName = (cityName: string) => {
  const allowedCharacters =  /^[a-zA-Z-]*$/;

  if (!allowedCharacters.test(cityName)) {
    "City name must contain only letters";
  }

  return '';
}


export const validateCount = (count: string) => {
  const allowedNumbers = /^[0-9]+$/;

  if (count && !allowedNumbers.test(count)) {
    return "Count must contain only digits";
  }
  
  return '';
}

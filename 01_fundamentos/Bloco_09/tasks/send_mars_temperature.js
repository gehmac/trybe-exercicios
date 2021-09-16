const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (marsTemperature) => {
  console.log(`Mars temperature is: ${marsTemperature()} degree Celsius`);
}

setTimeout(() => sendMarsTemperature(getMarsTemperature), messageDelay())
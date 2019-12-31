const printTime = () => {
  const countDownDate = new Date('Jan 1,2020 00:00:00').getTime();
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const output = `${days}Days ${hours}Hrs : ${minutes}Min : ${seconds}Sec before`;
    document.getElementById('demo').innerHTML = output;
    if (distance <= 0) {
      document.getElementById('demo').innerHTML = 'HAPPY NEW YEAR 2020';
      clearInterval(interval);
    }
  }, 1);
};

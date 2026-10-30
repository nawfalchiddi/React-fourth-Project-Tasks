function Timer({ time }) {
  const totalHundredths = Math.floor(time / 10);

  const hours = Math.floor(totalHundredths / 360000);
  const minutes = Math.floor(totalHundredths / 6000) % 60;
  const seconds = Math.floor(totalHundredths / 100) % 60;
  const hundredths = totalHundredths % 100;

  const format = (value) => String(value).padStart(2, '0');

  return (
    <div className="timer" role="timer" aria-label="Elapsed time">
      {format(hours)}:{format(minutes)}:{format(seconds)}.
      {format(hundredths)}
    </div>
  );
}

export default Timer;
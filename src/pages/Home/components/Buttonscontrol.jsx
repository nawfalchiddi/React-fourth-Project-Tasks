function ControlButtons({
  hasStarted,
  isRunning,
  onStart,
  onPauseResume,
  onReset
}) {
  return (
    <div className="controls">
      {!hasStarted ? (
        <button type="button" onClick={onStart}>
          Start
        </button>
      ) : (
        <>
          <button type="button" onClick={onReset}>
            Reset
          </button>

          <button type="button" onClick={onPauseResume}>
            {isRunning ? 'Pause' : 'Resume'}
          </button>
        </>
      )}
    </div>
  );
}

export default ControlButtons;
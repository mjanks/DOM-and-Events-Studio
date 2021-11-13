// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', () => {
  let inFlight = false;
  const takeOffButton = document.getElementById('takeoff');
  const landButton = document.getElementById('landing');
  const abortMissionButton = document.getElementById('missionAbort');
  const upButton = document.getElementById('up');
  const downButton = document.getElementById('down');
  const leftButton = document.getElementById('left');
  const rightButton = document.getElementById('right');
  const flightStatus = document.getElementById('flightStatus');
  const shuttleBackground = document.getElementById('shuttleBackground');
  const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

  takeOffButton.addEventListener('click', () => {
    if (inFlight) {
      window.alert('Shuttle is already in flight!');
    } else {
      let confirmTakeoffResponse = window.confirm(
        'Confirm that the shuttle is ready for takeoff.'
      );

      if (confirmTakeoffResponse && !inFlight) {
        flightStatus.innerHTML = 'Shuttle in flight.';
        shuttleBackground.style.backgroundColor = 'Blue';
        spaceShuttleHeight.innerHTML = 10000;
        inFlight = true;
      }
    }
  });

  landButton.addEventListener('click', () => {
    if (!inFlight) {
      window.alert('Shuttle is still on the ground!');
    } else {
      window.alert('The shuttle is landing. Landing gear engaged.');
      flightStatus.innerHTML = 'The shuttle has landed.';
      shuttleBackground.style.backgroundColor = 'Green';
      spaceShuttleHeight.innerHTML = 0;
      inFlight = false;
    }
  });

  abortMissionButton.addEventListener('click', () => {
    let confirmAbortMission = window.confirm(
      'Confirm that you want to abort the mission.'
    );

    if (confirmAbortMission) {
      flightStatus.innerHTML = 'Mission aborted.';
      shuttleBackground.style.backgroundColor = 'Green';
      spaceShuttleHeight.innerHTML = 0;
      inFlight = false;
    }
  });
});

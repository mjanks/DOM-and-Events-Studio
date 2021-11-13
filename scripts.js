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
  const rocketImage = document.getElementById('rocket');

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
        rocketImage.style.marginTop = '240px';
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
      rocketImage.style.marginTop = '250px';
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

  upButton.addEventListener('click', () => {
    let location = rocketImage.offsetTop;
    if (location !== 0 && inFlight) {
      location -= 10;
      rocketImage.style.marginTop = location + 'px';
      let height = Number(spaceShuttleHeight.innerHTML) + 10000;
      spaceShuttleHeight.innerHTML = height;
    } else {
      window.alert('Shuttle is at max height!');
    }
  });

  downButton.addEventListener('click', () => {
    let location = rocketImage.offsetTop;
    if (location !== 240 && inFlight) {
      location += 10;
      rocketImage.style.marginTop = location + 'px';
      let height = Number(spaceShuttleHeight.innerHTML) - 10000;
      spaceShuttleHeight.innerHTML = height;
    } else {
      window.alert('Shuttle is at minimum height! Click Land to touch down.');
    }
  });

  leftButton.addEventListener('click', () => {
    // move rocketImage
  });

  rightButton.addEventListener('click', () => {
    // move rocketImage
  });
});

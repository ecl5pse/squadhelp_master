export  const  options = {
  toastId: 1,
  position: "bottom-right",
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  autoClose: 2000
}

export const timeCalc = (ms) => {
  let timeLeft = {};
  if (ms > 0) {
    timeLeft = {
      d: Math.floor(ms / (1000 * 60 * 60 * 24)),
      h: Math.floor((ms / (1000 * 60 * 60)) % 24),
      m: Math.floor((ms / 1000 / 60) % 60),
      s: Math.floor((ms / 1000) % 60),
    };
  }
  return timeLeft;
};


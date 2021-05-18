class CountdownTimer {
  constructor(obj) {
    this.selector = obj.selector;
    this.targetDate = obj.targetDate;
    this.DELAY = 1000;
    this.intervalId = null;
  }

  onStart() {
    this.intervalId = setInterval(() => {
      const time = this.targetDate - Date.now();
      if (time < 0) {
        clearInterval(this.intervalId);
        return;
      }
      const { days, hours, mins, secs } = this.getTime(time);
      this.getRefs().days.textContent = days;
      this.getRefs().hours.textContent = hours;
      this.getRefs().mins.textContent = mins;
      this.getRefs().secs.textContent = secs;
    }, this.DELAY);
  }
  getRefs() {
    const container = document.querySelector(this.selector);
    return {
      days: container.querySelector('[data-value="days"]'),
      hours: container.querySelector('[data-value="hours"]'),
      mins: container.querySelector('[data-value="mins"]'),
      secs: container.querySelector('[data-value="secs"]'),
    };
  }

  getTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 24, 2021'),
}).onStart();

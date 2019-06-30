
(function () {
  'use strict';

  const END = 'завершенно';
  const MS_IN_SEC = 1000; // количество миллисекнуд в секнуден
  const MS_IN_MINUTE = 60 * MS_IN_SEC;
  const MS_IN_HOUR = 60 * MS_IN_MINUTE;
  const MS_IN_DAY = 24 * MS_IN_HOUR;


  class TimeLeft {

    /**
     * @param el {Element} - ссылка на корневой элемент
     */
    constructor(el) {
      const { from, to } = el.dataset;
      const result = [];

      if (!from || !to) {
        el.innerHTML = END;
        return;
      }

      const diff = this.parseDate(to) - this.parseDate(from);

      if (diff <= 0) {
        el.innerHTML = END;
        return;
      }

      const days = Math.floor(diff / MS_IN_DAY);

      if (days > 0) {
        if (days === 1) {
          result.push(`1 день`);
        } else if (days > 1 && days < 5) {
          result.push(`${days} дня`);
        } else {
          result.push(`${days} дней`);
        }
      }

      const hours = Math.floor((diff - days * MS_IN_DAY) / MS_IN_HOUR);

      if (hours > 0) {
        if (hours === 1) {
          result.push(`1 час`);
        } else if (hours > 1 && hours < 5) {
          result.push(`${hours} часа`);
        } else {
          result.push(`${hours} часов`);
        }
      }

      const minutes = Math.floor((diff - ( days * MS_IN_DAY + hours * MS_IN_HOUR )) / MS_IN_MINUTE);

      if (minutes > 0) {
        if (minutes === 1) {
          result.push(`1 минута`);
        } else if (minutes > 1 && minutes < 5) {
          result.push(`${minutes} минуты`);
        } else {
          result.push(`${minutes} минут`);
        }
      }

      const seconds = Math.floor((diff - ( days * MS_IN_DAY + hours * MS_IN_HOUR + minutes * MS_IN_MINUTE )) / MS_IN_SEC);

      if (seconds > 0) {
        if (seconds === 1) {
          result.push(`1 секунда`);
        } else if (seconds > 1 && seconds < 5) {
          result.push(`${seconds} секунды`);
        } else {
          result.push(`${seconds} секунд`);
        }
      }

      el.innerHTML = result.join(', ');
    }

    /**
     * Форматируем строку в дату. Чтобы написать данный метод нужно почитать главу http://learn.javascript.ru/datetime
     * @param {string} str - строка с датой в формате `year.month.day hours:minutes:second`
     * @return {Date} - возвращаем объект даты
     */
    parseDate(str) {
      const [ date, time ] = str.split(' ');
      const [ hours, minutes, second ] = time.split(':');
      const [ year, month, day] = date.split('.');

      return new Date(+year, month - 1, +day, +hours, +minutes, +second);
    }

    /**
     * Статчный метод, который можно вызывать не посредственно от класса, а не от объекта.
     * Подробнее здесь http://learn.javascript.ru/es-class#staticheskie-svoystva
     * @param el
     */
    static create(el) {
      return new TimeLeft(el);
    }
  }

  window.TimeLeft = TimeLeft;
})();

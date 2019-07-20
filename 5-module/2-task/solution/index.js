'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavods'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');

  var list = rows.map(function(i) {return (
    '<tr><td>'+i.name+'</td><td>'+i.age+'</td><td>'+i.salary+'</td><td>'+i.city+'</td></tr>'
  )}).join('');

//var final =  '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead><tbody>'+list+'</tbody>'

  this.el.innerHTML = '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead><tbody>'+list+'</tbody>'

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = function (column, desc = false) {

//console.log(column)
    function column_name(item) {
      if (item === 0) return 'name';
      if (item === 2) return 'salary';
    }

    let  col = column_name(column)
    // console.log(col)

    rows.sort(function(a,b){
      if (a[col] > b[col]) return 1;
      if (a[col] < b[col]) return -1;
    })
//console.log(rows)

    var list = rows.map(function(i) {return (
      '<tr><td>'+i.name+'</td><td>'+i.age+'</td><td>'+i.salary+'</td><td>'+i.city+'</td></tr>'
    )}).join('')

    var final =  '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead><tbody>'+list+'</tbody>'
    this.el.innerHTML = final
//document.querySelector('.result.table').appendChild(final)

//console.log(final)
//console.log(document.querySelector('.result').firstElementChild.innerHTML)
  };
}


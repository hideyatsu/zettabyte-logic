/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  data.forEach(element => {
    if (element.session_name === null || element.session_name === undefined) {
      delete data[element].session_name;
    }

    element.classes.forEach(elm => {
      if (elm.class_name === null || elm.class_name === undefined) {
        delete data[element].classes[elm].class_name;
      }

    })
  });

  return data;
}

console.log(result(data));

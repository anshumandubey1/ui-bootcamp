const formJSON = [
  {
    name: 'email',
    type: 'email',
    pattern:
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
  },
  {
    name: 'age',
    type: 'number',
    min: 10,
    max: 40,
  },
  {
    name: 'name',
    type: 'text',
    minLength: 10,
    maxLength: 20,
  },
];

const div = document.getElementById('form');
const form = document.createElement('form');
form.setAttribute('action', '');
form.setAttribute('method', 'POST');
for (item of formJSON) {
  const label = document.createElement('label');
  label.setAttribute('for', item.name);
  label.innerText = item.name.toUpperCase();
  const input = document.createElement('input');
  for (key of Object.keys(item)) {
    input.setAttribute(key, item[key]);
  }
  input.setAttribute('id', item.name);
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(document.createElement('br'));
}
const button = document.createElement('button');
button.setAttribute('type', 'submit');
button.innerText = 'Submit';
form.appendChild(button);
div.appendChild(form);

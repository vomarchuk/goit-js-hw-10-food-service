import { refs } from './_refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.themeSwitch.addEventListener('change', onChangeThemeSwitch);
if (localStorage.getItem('Theme') !== Theme.DARK) {
  localStorage.setItem('Theme', Theme.LIGHT);
}
show();

function onChangeThemeSwitch(e) {
  const inputChecked = e.target.checked;
  if (inputChecked) {
    dakrColor();
  } else {
    whiteColor();
  }
}

function whiteColor() {
  if (document.body.classList.contains(Theme.DARK)) {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
  }
  document.body.classList.add(Theme.LIGHT);
  localStorage.setItem('Theme', Theme.LIGHT);
}
function dakrColor() {
  if (document.body.classList.contains(Theme.LIGHT)) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
  }
  document.body.classList.add(Theme.DARK);
  localStorage.setItem('Theme', Theme.DARK);
}

function show() {
  document.body.classList.add(`${localStorage.getItem('Theme')}`);
  if (document.body.classList.contains(Theme.DARK)) {
    refs.themeSwitch.checked = true;
  }
}

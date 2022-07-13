export const ChangeCssVariables = (theme) => {
  // Get the root theme selector.
  const root = document.querySelector(":root");

  root.style.setProperty('--theme-color', `var(--color-${theme}-theme)`);
  root.style.setProperty('--theme-card-color', `var(--card-color-${theme}-theme)`);
  root.style.setProperty('--theme-background', `var(--background-${theme}-theme)`);
  root.style.setProperty('--theme-burger', `var(--burger-${theme}-theme)`);
  root.style.setProperty('--theme-card', `var(--card-${theme}-theme)`);
  root.style.setProperty('--theme-card-hover', `var(--card-hover-${theme}-theme)`);
  root.style.setProperty('--theme-header', `var(--header-${theme}-theme)`);
  root.style.setProperty('--theme-login', `var(--login-${theme}-theme)`);
  root.style.setProperty('--theme-person-btn', `var(--btn-${theme}-theme)`);
  root.style.setProperty('--theme-input', `var(--input-${theme}-theme)`);
  root.style.setProperty('--theme-contact', `var(--contact-${theme}-theme)`);
};
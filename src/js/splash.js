window.onload = timeout;
timeout = () => {
  window.setTimeout('redirect()', 5000);
};
// tiempo de espera
redirect = () => {
  window.location = 'views/app.html';
  return;
};
// Redirecciona a la pagina


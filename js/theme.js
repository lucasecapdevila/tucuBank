// Función anónima para encapsular nuestro código y no contaminar el scope global
(() => {
  "use strict";

  // Función para obtener la preferencia de tema guardada en localStorage
  const getStoredTheme = () => localStorage.getItem("theme");

  // Función para guardar la preferencia de tema en localStorage
  const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

  // Función para obtener el tema preferido (guardado o del sistema)
  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme; // Si hay un tema guardado, lo usamos
    }

    // Si no, usamos la preferencia del sistema (oscuro o claro)
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // Función para aplicar el tema al documento HTML y cambiar el ícono
  const setTheme = (theme) => {
    // Si el tema es 'auto', se ajusta a la preferencia del sistema
    if (
      theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }

    // Actualizar el ícono del botón
    const themeIcon = document.getElementById("themeIcon");
    if (themeIcon) {
      // Cambia el ícono a un sol si es oscuro, o a una luna si es claro
      themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }
  };

  // Aplicamos el tema preferido tan pronto como el DOM se carga
  setTheme(getPreferredTheme());

  // Escucha cambios en la preferencia de color del sistema operativo
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      // Si el usuario no ha hecho una elección manual (no hay tema guardado),
      // entonces actualizamos el tema para que coincida con el sistema.
      if (!storedTheme) {
        setTheme(getPreferredTheme());
      }
    });

  // Este evento se asegura de que el código se ejecute una vez que toda la página esté cargada
  window.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");

    // Agregamos el evento 'click' al botón
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const currentTheme = getPreferredTheme();
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setStoredTheme(newTheme); // Guardamos la nueva elección
        setTheme(newTheme); // Aplicamos el nuevo tema
      });
    }
  });
})();

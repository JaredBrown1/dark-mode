import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(value, initialValue) {
  const [someValue, setSomeValue] = useLocalStorage(value, initialValue);

  const toggleDarkMode = e => {
    e.preventDefault();
    setSomeValue(!someValue);
  };

  document.body.classList.toggle("dark-mode", someValue);

  return [someValue, toggleDarkMode];
}

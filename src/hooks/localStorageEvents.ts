/* eslint-disable @typescript-eslint/no-explicit-any */
// localStorageEvents.js
function emitLocalStorageChanged(key: any, value: any) {
    const event = new CustomEvent('localStorageChanged', {
      detail: { key, value }
    });
    window.dispatchEvent(event);
  }
  
  export function setItemWithEvent(key: string, value: string) {
    localStorage.setItem(key, value);
    emitLocalStorageChanged(key, value);
  }
  
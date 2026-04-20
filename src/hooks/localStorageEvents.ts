/* eslint-disable @typescript-eslint/no-explicit-any */
// localStorageEvents.js
function emitlocalStorageChanged(key: any, value: any) {
    const event = new CustomEvent('localStorageChanged', {
      detail: { key, value }
    });
    window.dispatchEvent(event);
  }
  
  export function setItemWithEvent(key: string, value: string) {
    localStorage.setItem(key, value);
    emitlocalStorageChanged(key, value);
  }
  
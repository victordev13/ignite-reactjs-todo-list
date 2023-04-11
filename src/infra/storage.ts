export function saveItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key: string, defaultValue: any = null) {
  const storaged = localStorage.getItem(key);
  if (!storaged) return defaultValue

  return JSON.parse(storaged)
}

const Storage = {
  getItem,
  saveItem
}

export default Storage;

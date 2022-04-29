export function localSet(key: string, value: any) {
    window.localStorage.setItem(key, value);
}

export function localGet(key: string) {
    const value: string | null = window.localStorage.getItem(key);
    try {
        return value
    } catch (error) {
        return value
    }
}

export function localRemove(key: string) {
    window.localStorage.removeItem(key);
}
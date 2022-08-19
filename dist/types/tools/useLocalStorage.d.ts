export interface UseLocalStorage {
    value: string;
    setValue: (value: string) => void;
}
export default function useLocalStorage(key: string, initialValue?: string): UseLocalStorage;

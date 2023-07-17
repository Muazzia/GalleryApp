import { create } from "zustand";

interface Store {
  search: string;
  setSearch: (name: string) => void;
}

const useSearch = create<Store>((set) => ({
  search: "",
  setSearch: (name: string) => set(() => ({ search: name })),
}));

export default useSearch;

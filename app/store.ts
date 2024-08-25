import create from "zustand";

interface CartState {
  items: number;
  addItem: () => void;
  removeItem: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: 0,
  addItem: () => set((state) => ({ items: state.items + 1 })),
  removeItem: () => set((state) => ({ items: state.items - 1 })),
}));

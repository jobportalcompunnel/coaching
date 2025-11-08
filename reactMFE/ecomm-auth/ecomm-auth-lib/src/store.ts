import { create } from "zustand";

type SharedState = {
  commonValue: string | null;
  setCommonValue: (value: string) => void;
};

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; SameSite=Lax`;
}

export const useSharedStore = create<SharedState>((set) => ({
  commonValue: getCookie("commonValue"),
  setCommonValue: (value: string) => {
    set({ commonValue: value });
    setCookie("commonValue", value);
  },
}));

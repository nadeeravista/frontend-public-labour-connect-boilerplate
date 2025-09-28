import { User } from "@/context/Auth0Context";
import { atom } from "jotai";

export const userUserAtom = atom<User | null>(null);

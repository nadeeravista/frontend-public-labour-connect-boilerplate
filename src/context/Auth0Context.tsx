"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useQuery } from "@/services/api-client/api-client";
import { useAtom } from "jotai";
import { userUserAtom } from "@/atoms/user";

export interface User {
  sub: string;
  name?: string;
  nickname?: string;
  email?: string;
  picture?: string;
  isCustomer: () => boolean;
  isProvider: () => boolean;
  customerId: string;
  providerId: string;
  role?: string[];
}

export interface Auth0ContextType {
  user: User | null;
  // isLoading: boolean;
  login: () => void;
  logout: () => void;
  userRole: string | undefined;
  isAdmin: () => boolean;
  requireAdmin: () => void;
}

const Auth0Context = createContext<Auth0ContextType | undefined>(undefined);

export function Auth0Provider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useAtom(userUserAtom);
  const router = useRouter();
  const pathname = usePathname();

  const { data: userdata, refetch: refetchUser } = useQuery(
    "get",
    "/user/me",
    undefined,
    {
      enabled: false,
    },
  );

  useEffect(() => {
    const hasProviderOrCustomer = !!(user?.providerId || user?.customerId);

    if (user && !hasProviderOrCustomer) {
      refetchUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (userdata) {
      setUser((prevUser) => {
        if (!prevUser) return null;
        return {
          ...prevUser,
          providerId: userdata?.providerId || "",
          customerId: userdata?.customerId || "",
          role: userdata?.role || [],
          isAdmin: userdata?.role?.includes("admin") ? true : false,
        };
      });
    }
  }, [userdata]);

  useEffect(() => {
    const checkSession = async () => {
      if (!user) {
        const roleResponse = await fetch("/api/auth/session").then((res) =>
          res.json(),
        );

        if (roleResponse?.success) {
          const userData = roleResponse.session;
          setUser(userData.user);
        }
      }
    };
    checkSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const login = () => {
    window.location.href = "/auth/login?returnTo=/backend";
  };

  const logout = () => {
    setUser(null);
    window.location.href = "/auth/logout";
  };

  const isAdmin = () => {
    return user?.role?.includes("admin") ? true : false;
  };

  const requireAdmin = () => {
    if (user?.role?.includes("admin") !== true) {
      router.push("/");
    }
  };

  const value = {
    user,
    login,
    logout,
    isAdmin,
    requireAdmin,
    isProvider: user?.providerId ? true : false,
    isCustomer: user?.customerId ? true : false,
    userRole: user?.role?.[0] ?? "",
  };

  return (
    <Auth0Context.Provider value={value}>{children}</Auth0Context.Provider>
  );
}

export function useAuth() {
  const context = useContext(Auth0Context);
  if (context === undefined) {
    throw new Error("useAuth must be used within an Auth0Provider");
  }
  return context;
}

"use client";

import {
  headerContactList,
  headerSocialList,
  ourServices,
  industriesServed,
  ourAchievements
} from "@/lib/data";
import React, { createContext, createElement, useState } from "react";
export const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    button: {
      red: "bg-red text-secondary",
      black: "bg-primary text-secondary",
      icon: "flex gap-x-2 items-center justify-center group",
    },
  });

  const [data, setData] = useState({
    headerContactList,
    headerSocialList,
    ourServices,
    industriesServed,
    ourAchievements
  });

  return (
    <DesignContext.Provider value={{ theme, data }}>
      {children}
    </DesignContext.Provider>
  );
};

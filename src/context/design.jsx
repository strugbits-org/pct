'use client'

import React, { createContext, createElement, useState } from "react";
export const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    button: {
      red: "bg-red text-secondary",
      icon: "flex gap-x-2 items-center justify-center group",
    },
  })

  return (
    <DesignContext.Provider value={theme}>{children}</DesignContext.Provider>
  );
};

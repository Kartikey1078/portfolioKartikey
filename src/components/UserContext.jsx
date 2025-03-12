import React, { createContext, useState } from "react";

export const DataContext = createContext(); // ✅ Use DataContext instead of UserContext

function UserContext({ children }) {
  const [isTrue, setISTrue] = useState(false); // ✅ Check the correct state variable name

  return (
    <DataContext.Provider value={{ isTrue, setISTrue }}>
      {children}
    </DataContext.Provider>
  );
}

export default UserContext;

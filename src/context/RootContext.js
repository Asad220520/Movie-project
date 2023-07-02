import React, { useState } from 'react'
import { LanguageContext } from '.'

function RootContext({ children }) {
  const [language, setLanguage] = useState("en-US");
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default RootContext
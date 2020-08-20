import React from "react"
import { Provider, defaultTheme } from "@adobe/react-spectrum"

const SpectrumProvider = ({ children }) => (
  <Provider theme={defaultTheme}>{children}</Provider>
)

export default SpectrumProvider
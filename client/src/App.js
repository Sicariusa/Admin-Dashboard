import { Dashboard } from "@mui/icons-material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/Layout"
import { Dashboard } from "scenes/dashboard";

function App() {
  // we use mode from redux on theme from themeSettings that was
  // in theme.js file you can find it in line:63
  const mode = useSelector((state) => state.global.mode )
  const theme = useMemo(()=> createTheme(themeSettings(mode)) , [mode] )
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme = {theme}>
          <CssBaseline />
          <Routes>
            {/* NavBar and sidebar will be shown on everypage  */}
            {/* Or any style we want */}
            <Route element = {<Layout />}>
              <Route path="/" element={<Navigate to ="dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard/>} />
              
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

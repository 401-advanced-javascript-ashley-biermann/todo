
import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = (props) => {

  let defaultSettings = {
    showCompleted: true, // boolean
    itemsPerScreen: 3, // number
    sortBy: 'difficulty' // string
  }

  const [settings, setSettings] = useState([defaultSettings]);

  const state = {   
    settings,
    changeSettings: (setting) => setSettings([...settings, setting]),
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
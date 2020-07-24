
import React, { useState } from 'react';

// defining our context object, so that we can encapsulate info pertaining to Settings, and padd them to different components
export const SettingsContext = React.createContext();

const SettingsProvider = (props) => {

  let defaultSettings = {
    showCompleted: true, // boolean
    itemsPerScreen: 3, // number
    sortBy: 'difficulty' // string
  }

  // we use state (over just regular variables) so that we can share info across all of the react app that something has changed
  const [settings, setSettings] = useState([defaultSettings]);


  // an object that contains the relevant information / capabilities to pass to our children 
  const state = {
    settings, // these are the settings that are set
    changeSettings: (setting) => setSettings([...settings, setting]), // this is a function to set the new settings
  }


  // we finally pass our settings data into our provider, as value
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
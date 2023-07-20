import React, { useState} from 'react';
import { createContext } from 'react';
export const MedAdded = createContext();
export const PatientId = createContext();
export const MedDetails = createContext();
function Context({children}) {
    const [medAdded , setMedAdded] = useState(false);
    const [patientId, setPatientID] = useState('6');
    const [medupdateDetails, setMedDetails] = useState([]);

  return (
    <MedAdded.Provider value={{medAdded, setMedAdded}}>
      <PatientId.Provider value={{patientId, setPatientID}}>
        <MedDetails.Provider value={{medupdateDetails, setMedDetails}}>
        {children}
        </MedDetails.Provider>
        </PatientId.Provider>
    </MedAdded.Provider>
  );
}

export default Context

import { useEffect, useState } from 'react';
import * as FileSystem from 'expo-file-system';

export const useGetMockPatientData = () => {
  const [patientData, setPatientData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const refetch = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      
      // Add artificial delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const content = await FileSystem.readAsStringAsync(
        FileSystem.documentDirectory + '../mock-data/patient-data.json'
      );
      const jsonData = JSON.parse(content);
      setPatientData(jsonData.patientData);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return {
    data: patientData,
    isLoading,
    isError,
    refetch,
  };
};
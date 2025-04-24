import { useEffect, useState } from 'react';
import { mockPatientData } from '@/mock-data/patien-mock-data';

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
      setPatientData(mockPatientData);
      console.log('Patient Data:', mockPatientData); // Log the patient data to the termina
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
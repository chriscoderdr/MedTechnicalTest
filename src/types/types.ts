export interface MedicalRecord {
    id: string;
    diagnosis: string;
    intervention: string;
    evaluation: string;
    requestTime: string;
    suspensions: string;
}

export type Patient = {
    name: string;
    age: string;
    medicalRecord: {
      id: string;
      diagnosis: string;
      intervention: string;
      evaluation: string;
      requestTime: string;
      suspensions: string;
    };
  };
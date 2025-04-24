import { Patient } from "@/src/types/types";


export const mockPatientData: Patient = {
    name: "Jorge Avendaño Pérez",
    age: "35 años",
    medicalRecord: {
        id: "77884",
        diagnosis: "Calcificación Talón",
        intervention: "Extirpación en talón",
        evaluation: "Sí",
        requestTime: "3 días",
        suspensions: "2"
    }
};
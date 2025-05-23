import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useGetEmergencyKindsQuery } from '@/src/store/emergencySlice';
import { styles } from "./styles";
import Dropdown from '../dropdown/dropdown';
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { useGetMockPatientData } from "@/src/hooks/useMockPatientData";

export default function MiniFicha() {
    const { data: emergencyKinds, isLoading, isError, refetch } = useGetEmergencyKindsQuery({});
    const [selectedEmergency, setSelectedEmergency] = useState<string>();
    const { data: patientData, isLoading: isLoadingPatient, isError: isErrorPatient, refetch: refetchPatient } = useGetMockPatientData();

    const renderPatientContent = () => {
        if (isLoadingPatient) {
            return (
                <View style={styles.loadingPatientContainer}>
                    <ActivityIndicator size="small" color="#154FBF" />
                    <Text style={styles.loadingPatientText}>Cargando datos del paciente...</Text>
                </View>
            );
        }

        if (isErrorPatient) {
            return (
                <View style={styles.errorPatientContainer}>
                    <Image source={require('@/assets/icons/icon_warning.svg')} style={styles.errorIcon} />
                    <Text style={styles.errorPatientText}>Error al cargar información</Text>
                    <TouchableOpacity onPress={refetchPatient} style={styles.retryButton}>
                        <Text style={styles.retryText}>Reintentar</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        if (!patientData) {
            return (
                <View style={styles.emptyPatientContainer}>
                    <Image source={require('@/assets/icons/icon_search.svg')} style={styles.emptyIcon} />
                    <Text style={styles.emptyPatientText}>No se encontraron datos del paciente</Text>
                </View>
            );
        }

        return (
            <>
                <View style={styles.patientInfoContainer}>
                    <View style={styles.avatarContainer}>
                        <Image style={{
                            width: 24,
                            height: 24,
                        }} source={require('@/assets/icons/icon_face.svg')} />
                    </View>
                    <View style={styles.patientDetails}>
                        <Text style={styles.patientName}>{patientData?.name || ''}</Text>
                        <Text style={styles.patientAge}>{patientData?.age || ''}</Text>
                    </View>
                </View>
                <View style={styles.medicalRecordContainer}>
                    <View style={styles.medicalRecordRow}>
                        <Text style={styles.medicalRecordLabel}>Ficha médica: </Text>
                        <Text style={styles.medicalRecordText}>{patientData?.medicalRecord.id || ''}</Text>
                    </View>
                    <View style={styles.medicalRecordRow}>
                        <Text style={styles.medicalRecordLabel}>Diagnóstico: </Text>
                        <Text style={styles.medicalRecordText}>{patientData?.medicalRecord.diagnosis || ''}</Text>
                    </View>
                    <View style={styles.medicalRecordRow}>
                        <Text style={styles.medicalRecordLabel}>Intervención: </Text>
                        <Text style={styles.medicalRecordText}>{patientData?.medicalRecord.intervention || ''}</Text>
                    </View>
                    <View style={styles.medicalRecordRow}>
                        <Text style={styles.medicalRecordLabel}>Evaluación preanestésica: </Text>
                        <Text style={styles.medicalRecordText}>{patientData?.medicalRecord.valuation || ''}</Text>
                    </View>
                    <View style={styles.medicalRecordRow}>
                        <Text style={styles.medicalRecordLabel}>Tiempo de solicitud: </Text>
                        <Text style={styles.medicalRecordText}>{patientData?.medicalRecord.requestTime || ''}</Text>
                    </View>
                    <View style={styles.medicalRecordRow}>
                        <Text style={styles.medicalRecordLabel}>Suspensiones: </Text>
                        <Text style={styles.medicalRecordText}>{patientData?.medicalRecord.suspensions || ''}</Text>
                    </View>
                </View>
            </>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <View style={styles.contentContainer}>
                    <Text style={styles.specialty}>Traumatología</Text>
                    <Text style={styles.doctorName}>Dr. José Pedro Sans</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{
                        width: 50,
                        height: 50,
                    }} source={require('@/assets/icons/icon_bone.svg')} />
                </View>
            </View>

            {renderPatientContent()}

            <View style={styles.iconsContainer}>
                <View style={styles.iconItem}>

                    <Image style={{
                        width: 24,
                        height: 24,
                    }} source={require('@/assets/icons/icon_cardio.svg')} />

                </View>
                <View style={styles.iconItem}>
                    <Image style={{
                        width: 24,
                        height: 24,
                    }} source={require('@/assets/icons/icon_anestesia.svg')} />
                </View>
            </View>


            <View style={styles.selectorContainer}>
                <Text style={styles.selectorLabel}>Tipo de Urgencia</Text>

                {isLoading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="small" color="#154FBF" />
                        <Text style={styles.loadingText}>Cargando...</Text>
                    </View>
                ) : isError ? (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>⚠️ Error de conexión</Text>
                        <TouchableOpacity onPress={refetch} style={styles.retryButton}>
                            <Text style={styles.retryText}>Reintentar</Text>
                        </TouchableOpacity>
                    </View>
                ) : !emergencyKinds?.length ? (
                    <Text style={styles.emptyText}>No disponible</Text>
                ) : (
                    <Dropdown
                        options={emergencyKinds}
                        selectedValue={selectedEmergency}
                        onSelect={setSelectedEmergency}
                    />
                )}
            </View>
        </View>
    );
}


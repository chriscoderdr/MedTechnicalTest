import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useGetEmergencyKindsQuery } from '@/app/store/emergencySlice';
import { styles } from "./styles";
import Dropdown from '../dropdown/dropdown';
import { useState } from "react";
import { ActivityIndicator } from "react-native";


export default function MiniFicha() {
    const { data: emergencyKinds, isLoading, isError, refetch } = useGetEmergencyKindsQuery({});
    const [selectedEmergency, setSelectedEmergency] = useState<string>();

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#154FBF" />
                <Text style={styles.loadingText}>Cargando información...</Text>
            </View>
        );
    }

    if (isError) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Error al cargar los datos</Text>
                <TouchableOpacity onPress={refetch} style={styles.retryButton}>
                    <Text style={styles.retryText}>Reintentar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (!emergencyKinds?.length) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No hay tipos de emergencia disponibles</Text>
            </View>
        );
    }

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
                    }} source={require('@/app/icons/icon_bone.svg')} />
                </View>
            </View>

            <View style={styles.patientInfoContainer}>
                <View style={styles.avatarContainer}>
                    <Image style={{
                        width: 24,
                        height: 24,
                    }} source={require('@/app/icons/icon_face.svg')} />
                </View>
                <View style={styles.patientDetails}>
                    <Text style={styles.patientName}>Jorge Avendaño Pérez</Text>
                    <Text style={styles.patientAge}>35 años</Text>
                </View>
            </View>

            <View style={styles.medicalRecordContainer}>
                <View style={styles.medicalRecordRow}>
                    <Text style={styles.medicalRecordLabel}> tFicha médica: </Text>
                    <Text style={styles.medicalRecordText}>77884</Text>
                </View>
                <View style={styles.medicalRecordRow}>
                    <Text style={styles.medicalRecordLabel}>Diagnóstico: </Text>
                    <Text style={styles.medicalRecordText}>Calcificación Talón</Text>
                </View>
                <View style={styles.medicalRecordRow}>
                    <Text style={styles.medicalRecordLabel}>Intervención: </Text>
                    <Text style={styles.medicalRecordText}>Extirpación en talón</Text>
                </View>
                <View style={styles.medicalRecordRow}>
                    <Text style={styles.medicalRecordLabel}>Evaluación preanestésica: </Text>
                    <Text style={styles.medicalRecordText}>Sí</Text>
                </View>
                <View style={styles.medicalRecordRow}>
                    <Text style={styles.medicalRecordLabel}>Tiempo de solicitud: </Text>
                    <Text style={styles.medicalRecordText}>3 días</Text>
                </View>
                <View style={styles.medicalRecordRow}>
                    <Text style={styles.medicalRecordLabel}>Suspensiones: </Text>
                    <Text style={styles.medicalRecordText}>2</Text>
                </View>
            </View>


            <View style={styles.iconsContainer}>
                <View style={styles.iconItem}>

                    <Image style={{
                        width: 24,
                        height: 24,
                    }} source={require('@/app/icons/icon_cardio.svg')} />

                </View>
                <View style={styles.iconItem}>
                    <Image style={{
                        width: 24,
                        height: 24,
                    }} source={require('@/app/icons/icon_anestesia.svg')} />
                </View>
            </View>


            <View style={styles.selectorContainer}>
                <Text style={styles.selectorLabel}>Tipo de Urgencia</Text>
                <Dropdown
                    options={emergencyKinds || []}
                    selectedValue={selectedEmergency}
                    onSelect={setSelectedEmergency}
                />
            </View>
        </View>
    );
}


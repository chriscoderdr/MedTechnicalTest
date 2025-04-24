import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Colors.light.background,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#719EC0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'hidden',
        marginVertical: 10,
        fontFamily: 'Poppins_500Medium',
    },
    header: {
        backgroundColor: '#154FBF',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    contentContainer: {
        backgroundColor: '#154FBF',
        paddingBottom: 15,
    },
    specialty: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        color: '#FFFFFF',
        marginTop: 10,
        marginLeft: 15,
    },
    doctorName: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 12,
        color: '#FFFFFF',
        marginLeft: 15,
    },
    patientInfoContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15,
        alignItems: 'center',
    },
    avatarContainer: {
        marginRight: 10,
    },
    avatarText: {
        fontSize: 20,
    },
    patientDetails: {
        flex: 1,
    },
    patientName: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        color: '#000000',
    },
    patientAge: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        color: '#000000',
    },
    medicalRecordContainer: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    medicalRecordText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#000000',
        lineHeight: 18,
    },
    medicalRecordRow: {
        flexDirection: 'row',
    },
    medicalRecordLabel: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#154FBF',
        lineHeight: 18,
    },
    iconsContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15,
    },
    iconItem: {
        marginRight: 10,
    },
    selectorContainer: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },
    selectorLabel: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 14,
        color: '#154FBF',
        marginBottom: 5,
    },
    selector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#154FBF',
        borderRadius: 6,
        padding: 13,
    },
    selectorText: {
        fontFamily: 'Overpass',
        fontSize: 16,
        color: '#719EC0',
    },
    selectorIcon: {
        color: '#154FBF',
        fontSize: 16,
    },
});
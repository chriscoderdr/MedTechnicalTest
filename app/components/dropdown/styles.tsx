import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
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
    width: 16,
    height: 16,
  },
  optionsContainer: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#154FBF',
    borderRadius: 6,
    backgroundColor: Colors.light.background,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#719EC0',
  },
  optionText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#154FBF',
  },
});
import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import currencies from "../assets/currency.json";

const BalanceScreen = () => {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [companyValue, setCompanyValue] = useState("USD");

  const [company, setCompany] = useState(
    currencies.map((currency) => ({ ...currency, key: currency.value }))
  );
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState("");

  DropDownPicker.setListMode("MODAL");

  const inputRef = useRef(null); // Create a ref for the TextInput
  useEffect(() => {
    // Automatically focus on the input when the screen loads
    inputRef.current.focus();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bottomCont}>
        <Text style={styles.heading}>Balance</Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <DropDownPicker
              open={companyOpen}
              value={companyValue}
              items={company}
              setOpen={setCompanyOpen}
              setValue={setCompanyValue}
              setItems={setCompany}
              placeholder="USD"
              searchable={true}
              searchPlaceholder="Search"
              containerStyle={styles.dropdownContainer}
              style={styles.dropdownStyle}
              labelStyle={styles.dropdownTextStyle}
              showArrowIcon={false}
              placeholderStyle={styles.dropdownTextStyle}
              dropDownContainerStyle={styles.customDropdownContainer}
            />
            <TextInput
              ref={inputRef} // Assign the ref to the input
              style={styles.input}
              keyboardType="numeric"
              placeholder="00.00"
              placeholderTextColor="rgba(0,0,0,0.3)"
              value={balance}
              onChangeText={(text) => setBalance(text)}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomCont: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: "#7F3DFF",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    paddingVertical: 15,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 70,
    width: "100%",
  },
  heading: {
    textAlign: "left",
    color: "rgba(0,0,0,0.5)",
    paddingLeft: 15,
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  flag: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  dropdownItemText: {
    fontSize: 16,
    color: "black",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    backgroundColor: "#7F3DFF",
    // paddingHorizontal: 10,
  },
  form: {
    flexDirection: "row", // Align children horizontally
  },
  inputContainer: {
    flexDirection: "row", // Align children horizontally
    alignItems: "center",
    flex: 1,
  },
  dropdownContainer: {
    // flex: 1,
    // marginRight: 10,
    // height: 60,
    // height: "auto",
    width: 135,
    backgroundColor: "transparent",
  },
  customDropdownContainer: {
    width: 200, // Set the desired width for the dropdown list
    maxHeight: 200, // Set the desired max height for the dropdown list
    // borderRadius: 20,
    borderColor: "transparent",
    overflow: "scroll",
    zIndex: 1000,
  },
  dropdownTextStyle: {
    color: "black",
    fontSize: 50,
    fontWeight: "900",
    textAlign: "left",
  },
  dropdownStyle: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    // width: 400,
    // width: "100%",
    // height: "100%",
  },
  input: {
    flex: 1,
    height: "auto",
    color: "#000",
    fontSize: 50,
    fontWeight: "900",
  },
});

export default BalanceScreen;

import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const BalanceScreen = () => {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [companyValue, setCompanyValue] = useState(null);
  const [company, setComapny] = useState([
    { label: "PUCIT", value: "pucit" },
    { label: "UCP", value: "ucp" },
    { label: "UET", value: "uet" },
  ]);
  const [loading, setLoading] = useState(false);
  // const onCompanyOpen = useCallback(() => {
  // setGenderOpen(false);
  // }, []);

  return (
    <View style={{ marginTop: 100 }}>
      <DropDownPicker
        style={styles.dropdown}
        open={companyOpen}
        value={companyValue} //companyValue
        items={company}
        setOpen={setCompanyOpen}
        setValue={setCompanyValue}
        setItems={setComapny}
        // placeholder="Select Company"
        // placeholderStyle={styles.placeholderStyles}
        // loading={loading}
        // activityIndicatorColor="#5188E3"
        searchable={true}
        // searchPlaceholder="Search your company here..."
        // onOpen={onCompanyOpen}
        // onChangeValue={onChange}
        // zIndex={1000}
        // zIndexInverse={3000}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BalanceScreen;

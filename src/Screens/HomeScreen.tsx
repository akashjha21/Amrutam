import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import SearchBar from "../components/SearchBar";
import HealthBar from "../components/HealthBar";
import Routines from "../components/Routines";
import BottomSheet from "@gorhom/bottom-sheet";
import { useMemo, useRef, useState } from "react";
import ButtonGreen from "../helpers/ButtonGreen";
import ButtonWhite from "../helpers/ButtonWhite";
import BottomSheetContent from "../components/BottomSheetContent";
import Myroutine from "../components/DetailsScreenCompo/Myroutine";
import Explore from "../components/DetailsScreenCompo/Explore";
import Frame from "../components/DetailsScreenCompo/Frame";
import ExploreCards from "../components/DetailsScreenCompo/ExploreCards";
const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }: any) => {
  const snapPoints = useMemo(() => ["52%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleColsePress = () => {
    bottomSheetRef.current?.close();
    console.log("Touch Kiya");
  };
  const [show, setShow] = useState<boolean>(true)

  return (
    <>
      <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
        <View style={styles.container}>
          <Header navigation={navigation} />

          <SearchBar />

          <HealthBar navigation={navigation} />

          <StatusBar backgroundColor="#DDF2EF" />
          {/* <CircularProgress/> */}
        </View>
        <Routines />
        <Myroutine navigation={navigation} setShow={setShow} />
        <Explore />
        <Frame />
        <ExploreCards />
      </ScrollView>

      {show === true && (
        <BottomSheet
          snapPoints={snapPoints}
          backgroundStyle={{ borderTopEndRadius: 30 }}
          enablePanDownToClose={true}
          handleIndicatorStyle={{ width: 30 }}
          ref={bottomSheetRef}
          onClose={()=>setShow(false)}
        >
          <View style={{ marginHorizontal: width * 0.06, marginTop: 20 }}>
            <BottomSheetContent />
            <ButtonGreen name="Mark as Complete" />
            <ButtonWhite name="Snooze for 10min" />
            <View style={{ alignItems: "center" }}>
              <Pressable onPress={handleColsePress}>
                <Text style={{ color: "#3A643B", marginTop: 20, fontSize: 16 }}>
                  Skip
                </Text>
              </Pressable>
            </View>
          </View>
        </BottomSheet>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    marginTop: "9%",
    marginHorizontal: width * 0.05,
  },
});

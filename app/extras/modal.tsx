import { ModalType } from "@/scripts/types";
import { View, Text, Modal, Pressable } from "react-native";
import { modal } from "../styles/settingsStyle";

export const SettingsModal = ({
  display,
  setDisplay,
  content,
  func,
}: {
  display: boolean;
  setDisplay: any;
  content: ModalType;
  func: any;
}) => {
  return (
    <Modal
      transparent={true}
      visible={display}
      supportedOrientations={["portrait", "landscape"]}
    >
      <View style={modal.container}>
        <View style={modal.modalContent}>
          <Text style={modal.modalHeader}>{content.title}</Text>
          <Text style={modal.modalText}>{content.text}</Text>
          <Pressable
            style={[modal.modalButton, (content.bad) ? modal.modalBad : modal.modalGood]}
            onPress={() => {
              func();
              setDisplay(false);
            }}
          >
            <Text style={modal.modalButtonText}>Confirm</Text>
          </Pressable>
          <Pressable
            style={[modal.modalButton, modal.modalNeutral]}
            onPress={() => setDisplay(false)}
          >
            <Text style={modal.modalButtonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

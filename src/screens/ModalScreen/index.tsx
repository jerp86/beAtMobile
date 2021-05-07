import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors, fonts } from '../../styles';
import { px } from '../../utils';

interface Props {
  visible: boolean;
  question: string;
}

export const ModalScreen = ({ visible = false, question }: Props) => {
  const [modalVisible, setModalVisible] = useState(visible);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{question}</Text>
          <TextInput
            style={styles.input}
            placeholder="Toque aqui para sua resposta"
            placeholderTextColor={colors.shadowText}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: px(8),
  },
  modalView: {
    margin: px(16),
    backgroundColor: colors.white,
    borderRadius: px(20),
    padding: px(32),
    alignItems: 'center',
    shadowColor: colors.shadowBox,
    shadowOffset: {
      width: 0,
      height: px(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: px(20),
    padding: px(16),
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: colors.purpleDark,
  },
  textStyle: {
    color: colors.white,
    fontFamily: fonts.text,
    fontSize: px(14),
    textAlign: 'center',
  },
  modalText: {
    fontFamily: fonts.heading,
    fontSize: px(18),
    color: colors.purpleDark,
    marginBottom: px(16),
    textAlign: 'center',
  },
  input: {
    minWidth: '100%',
    maxWidth: '100%',
    marginBottom: px(24),
    paddingHorizontal: px(8),
    borderBottomWidth: px(3),
    borderBottomColor: colors.purple,
    fontFamily: fonts.complement,
    fontSize: px(16),
  },
});

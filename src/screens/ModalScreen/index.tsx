import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as Location from 'expo-location';

import { colors, fonts } from '../../styles';
import { px } from '../../utils';
import { Load } from '../../components';

interface Props {
  visible: boolean;
  question: string;
}

export const ModalScreen = ({ visible = false, question }: Props) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState<string>();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();

    if (location) {
      setLatitude(location?.coords.latitude);
      setLongitude(location?.coords.longitude);
    }
  }, [location]);

  if (errorMsg) {
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
            <Text style={styles.modalText}>
              Infelizmente não podemos permitir que você responda!
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Depois eu volto</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  }

  if (!location) {
    <Load />;
  }

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
          <View style={styles.location}>
            <Text style={styles.textLocation}>
              {`Latitude: ${latitude?.toFixed(4)}`}
            </Text>
            <Text style={styles.textLocation}>
              {`Longitude: ${longitude?.toFixed(4)}`}
            </Text>
          </View>
          <Text style={styles.textLocation}>
            {`Data da Resposta: ${new Date().toLocaleDateString('pt-br')}`}
          </Text>
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
  },
  modalView: {
    backgroundColor: colors.white,
    borderRadius: px(20),
    margin: px(16),
    paddingHorizontal: px(16),
    paddingVertical: px(24),
    alignItems: 'center',
    shadowColor: colors.shadowBox,
    shadowOffset: {
      width: 0,
      height: px(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
  },
  button: {
    borderRadius: px(20),
    paddingHorizontal: px(32),
    paddingVertical: px(16),
    marginTop: px(16),
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
    marginBottom: px(16),
    paddingHorizontal: px(8),
    borderBottomWidth: px(3),
    borderBottomColor: colors.purple,
    fontFamily: fonts.complement,
    fontSize: px(16),
  },
  location: {
    flexDirection: 'row',
  },
  textLocation: {
    color: colors.purple,
    fontFamily: fonts.text,
    fontSize: px(12),
    textAlign: 'center',
    paddingHorizontal: px(16),
    paddingBottom: px(8),
  },
});

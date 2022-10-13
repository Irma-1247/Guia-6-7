import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
const habitaciones = [
  {
    titu: 'Individual',
    src: require('./src/img/individual.jpg'),
    des: 'Habitación individual.',
  },
  {
    titu: 'Doble',
    src: require('./src/img/doble.jpg'),
    des: 'Habitación doble.',
  },
  {
    titu: 'Lujo',
    src: require('./src/img/lujo.jpg'),
    des: 'Habitación presidencial.',
  },
  {
    titu: 'Pareja',
    src: require('./src/img/pareja.jpg'),
    des: 'Habitación con cama tamaño Queen.',
  },
];
const servicios = [
  {
    titu: 'Comida',
    src: require('./src/img/comida.jpg'),
    des: 'Con todo incluido.',
  },
  {
    titu: 'WiFi',
    src: require('./src/img/wifi.png'),
    des: 'Internet en cada una de las zonas del hotel.',
  },
  {
    titu: 'Zonas de recreación',
    src: require('./src/img/piscina.jpeg'),
    des: 'Diversión asegurada para toda la familia.',
  },
];
const zonas = [
  {
    titu: 'Playa',
    src: require('./src/img/playa.jpg'),
    des: 'A pocos km de la zona.',
  },
  {
    titu: 'Cenotes',
    src: require('./src/img/cenotes.jpg'),
    des: 'Atractivo natural imperdible.',
  },
  {
    titu: 'Restaurantes',
    src: require('./src/img/restaurante.jpg'),
    des: 'Gran variedad de restaurantes para todos los gustos.',
  },
  {
    titu: 'Surf',
    src: require('./src/img/surf.jpg'),
    des: 'Competiciones semanales.',
  },
];
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [titu, setTitu] = useState('');
  const [des, setDes] = useState('');
  return (
    <>
      <ScrollView style={styles.container}>
        <Modal transparent={true} animationType="slide" visible={modalVisible}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>{titu}</Text>
              <Text style={styles.des}>{des}</Text>
              <Button
                title="cerrar"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
        </Modal>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.banner}
            source={require('./src/img/front.jpg')}
          />
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo2}>Hotel Sivar</Text>
          <Text style={styles.titulo}>Habitaciones</Text>
          <ScrollView horizontal>
            {habitaciones.map((u, i) => {
              return (
                <React.Fragment key={i}>
                  <View>
                    <TouchableHighlight
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        setTitu(u.titu);
                        setDes(u.des);
                      }}>
                      <Image style={styles.habitacion} source={u.src} />
                    </TouchableHighlight>
                  </View>
                </React.Fragment>
              );
            })}
          </ScrollView>
          <Text style={styles.titulo}>Servicios</Text>
          <View>
            {servicios.map((u, i) => {
              return (
                <React.Fragment key={i}>
                  <View>
                    <TouchableHighlight
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        setTitu(u.titu);
                        setDes(u.des);
                      }}>
                      <Image style={styles.service} source={u.src} />
                    </TouchableHighlight>
                  </View>
                </React.Fragment>
              );
            })}
          </View>
          <Text style={styles.titulo}>Lugares cercanos</Text>
          <View style={styles.listado}>
            {zonas.map((u, i) => {
              return (
                <React.Fragment key={i}>
                  <View style={styles.listaItem}>
                    <TouchableHighlight
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        setTitu(u.titu);
                        setDes(u.des);
                      }}>
                      <Image style={styles.service} source={u.src} />
                    </TouchableHighlight>
                  </View>
                </React.Fragment>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#223240',
  },
  banner: {
    height: 200,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    color: 'white',
  },
  titulo2: {
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 10,
    color: 'white',
    textAlign: 'center',
  },
  contenedor: {
    marginHorizontal: 10,
  },
  habitacion: {
    width: 200,
    height: 250,
    marginRight: 10,
  },
  service: {
    width: '100%',
    height: 150,
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#347355',
    margin: 30,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 22,
    justifyContent: 'center',
    color: 'white',
  },
  des: {
    fontSize: 17,
    marginBottom: '10%',
    marginTop: '10%',
  },
});
export default App;

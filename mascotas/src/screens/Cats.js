import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
const gatos = [
  {
    title: 'Gato de pelo corto',
    src: require('../img/cat/americano.jpg'),
    temp: 'Americano',
  },
  {
    title: 'Gato persa',
    src: require('../img/cat/persa.png'),
    temp: 'Irán',
  },
  {
    title: 'Ragdoll',
    src: require('../img/cat/ragdoll.jpg'),
    temp: 'Isla de Terranova',
  },
  {
    title: 'Siamés',
    src: require('../img/cat/siames.jpg'),
    temp: 'Tailandia',
  },
  {
    title: 'Abisinio',
    src: require('../img/cat/abisinio.jpg'),
    temp: 'Etiopía, Sudeste Asiático',
  },
];

const Cats = ({}) => {
  return (
    <ScrollView style={styles.area}>
      {gatos.map((u, i) => {
        return (
          <React.Fragment key={i}>
            <View style={styles.cont}>
              <View>
                <Image style={styles.img} source={u.src} />
              </View>
              <View>
                <Text style={styles.subtitulo}>{u.title}</Text>
                <Text style={styles.titu}>{u.temp}</Text>
              </View>
            </View>
          </React.Fragment>
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  area: {
    flex: 1,
    padding: '2%',
    backgroundColor: '#D9CCC5',
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  img: {
    width: 100,
    height: 100,
    margin: 8,
    padding: '20%',
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    color: 'black',
    marginTop: '5%',
  },
  titu: {
    color: 'black',
    fontSize: 18,
    marginTop: '2%',
    marginBottom: '2%',
  },
  cont: {
    flex: 1,
    flexDirection: 'row',
  },
});
export default Cats;

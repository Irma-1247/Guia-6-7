import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
const gatos = [
  {
    id: '1',
    title: 'Pit Bull Terrier',
    src: require('../img/dog/pitbull.jpg'),
    temp: 'Americano',
  },
  {
    id: '2',
    title: 'Husky siberiano',
    src: require('../img/dog/husky.jpg'),
    temp: 'Siberia',
  },
  {
    id: '3',
    title: 'Labrador retriever',
    src: require('../img/dog/labrador.jpg'),
    temp: 'Isla de Terranova',
  },
  {
    id: '4',
    title: 'Bulldog',
    src: require('../img/dog/bulldog.jpg'),
    temp: 'Reino Unido',
  },
  {
    id: '5',
    title: 'Chihuahua',
    src: require('../img/dog/chihuahua.jpg'),
    temp: 'México',
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

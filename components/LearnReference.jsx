import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import icon from '../assets/icon.png'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'
import { Logo } from './Logo'

export default function Main() {
  const [data, setData] = useState([])

  const inset = useSafeAreaInsets()

  return (
    <>
      <View
        style={{ paddingTop: inset.top, paddingBottom: inset.bottom }}
      ></View>
      <Image
        borderRadius={10}
        fadeDuration={350}
        source={icon}
        style={{
          width: 100,
          height: 100,
          // resizeMode: "contain"
        }}
      />

      <Image
        source={{
          uri: 'https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg',
        }}
        style={{ height: 60, width: 100 }}
      />
      <Text>oOpen up App.js to start working on your app!</Text>
      <Text style={styles.titulo}> hola mundossss </Text>

      <Button title="press" onPress={() => alert('hola')} />

      {/* ************* deprecados ************* 
  <TouchableHighlight underlayColor={"#0f0"} onPress={() => alert("hola")}>
    <Text>touchable</Text>
  </TouchableHighlight>

  <TouchableOpacity onPress={() => alert("hola")}>
    <Text>TouchableOpacity</Text>
  </TouchableOpacity>
  */}

      <Pressable
        onPress={() => {
          alert('promt?')
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'gray' : 'white',
            paddingHorizontal: 10,
            paddingVertical: 7,
            borderRadius: 4,
            marginTop: 10,
          },
        ]}
      >
        {({ pressed }) => (
          <Text
            style={{
              fontSize: pressed ? 10 : 20,
            }}
          >
            Pressable
          </Text>
        )}
      </Pressable>

      {/* para no pasarse del status bar (solo ios) */}
      {/* <SafeAreaView style={{ margin: 12 }}> */}
      {/* ScrollView: renderiza todo de golpe,
      preferiblemente para algo estatico
      y no dinamico */}
      {/* <ScrollView>
          <View>
            lorem loremloremloremloremloremloremlorem
            loremloremloremloremloremloremlorem
            loremloremloremloremloremloremlorem
            loremloremloremloremloremloremlorem
            loremloremloremloremloremloremlorem
            loremloremloremloremloremloremlorem
          </View>
        </ScrollView>
      </SafeAreaView> */}

      {/* es un loading */}
      <ActivityIndicator color={'#f8f'} />

      {/* para renderizar listas dinamicas (con scroll)
          mejor rendimiento
      */}

      <FlatList
        data={data}
        // por defecto item.key > item.id > error
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <>{item}</>}
      />

      <Logo />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  titulo: {
    fontSize: 20,
    color: '#00f',
  },
})

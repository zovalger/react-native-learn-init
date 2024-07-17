import React, { useEffect, useRef } from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'

export function GameCard({ game }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: game.image }}
        fadeDuration={100}
      />

      <View style={styles.containerInfo}>
        <Text style={styles.title}>{game.title}</Text>

        {/* <View></View> */}

        <Text style={styles.score}>{game.score}</Text>
        <Text style={styles.description}>{game.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { marginBottom: 20, flexDirection: 'row' },
  containerInfo: { flexShrink: 1 },
  image: { width: 100, height: 150, marginRight: 8 },
  title: { color: '#fff', fontSize: 24 },
  score: {
    color: '#f60',
    fontSize: 20,
    // backgroundColor: '#f60',
    // borderRadius: 4,
    // paddingHorizontal: 4,
    // alignSelf: 'flex-start',
  },
  description: { color: '#fff', maxHeighxt: 100, overflow: 'hidden' },
})

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      delay: index * 50,
      useNativeDriver: true,
    }).start()
  }, [opacity, index])

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  )
}

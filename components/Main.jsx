import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { getLatestGames } from '../lib/metacritic'
import { AnimatedGameCard } from './GameCard.jsx'
import { Logo } from './Logo.jsx'

export default function Main() {
  const [games, setGames] = useState([])

  const insets = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames()
      .then((data) => {
        setGames(data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <View style={[{ marginTop: insets.top }, styles.container]}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <FlatList
        style={styles.listGames}
        data={games}
        keyExtractor={(item) => item.slug}
        renderItem={({ item, index }) => (
          <AnimatedGameCard game={item} index={index} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 15 },
  logoContainer: { paddingVertical: 10 },

  listGames: {},
})

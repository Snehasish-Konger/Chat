import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from "../config/firebase";
import { ListItem, Avatar } from '@rneui/themed'

const ChatList = ({id, chatName, enterChat}) => {
  const { photoURL } = auth.currentUser;
  return (
    <ListItem>
      <Avatar rounded source={{ uri: photoURL || "https://i.pravatar.cc/300" }} />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          Loki
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a subtitle. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default ChatList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
})
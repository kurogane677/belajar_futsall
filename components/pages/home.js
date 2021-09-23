import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Button,
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { SectionGrid } from 'react-native-super-grid';
import * as moment from 'moment';

import { Ionicons } from '@expo/vector-icons';
import Banner from '../../assets/banner.jpg';

export default function Home() {
  let today = new Date();
  let date =
    today.getDate() +
    '/' +
    parseInt(today.getMonth() + 1) +
    '/' +
    today.getFullYear();
  let time = today.getHours() + ':' + today.getMinutes();

  const items = [
    {
      name: 'Yusril',
      code: '#1abc9c',
    },
    {
      name: '',
      image: Banner,
      code: 'grey',
    },
  ];
  const [content, setContent] = useState([
    { name: 'Item 1', code: '#1abc9c', avaiable: 'Yes', score:'2-0', team: 'Team 1' },
    { name: 'Item 2', code: '#2ecc71', avaiable: 'Yes', score:'1-3', team: 'Team 2' },
    { name: 'Item 3', code: '#3498db', avaiable: 'Yes', score:'0-0', team: 'Team 3' },
    { name: 'Item 1', code: '#1abc9c', avaiable: 'Yes', score:'2-0', team: 'Team 1' },
    { name: 'Item 2', code: '#2ecc71', avaiable: 'Yes', score:'1-3', team: 'Team 2' },
    { name: 'Item 3', code: '#3498db', avaiable: 'Yes', score:'0-0', team: 'Team 3' },
  ]);

  return (
    <View style={styles.container}>
    <ScrollView>
      <FlatGrid
        itemDimension={300}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            {item.name === '' ? (
              <Image
                source={Banner}
                resizeMode="contain"
                style={styles.banner}
              />
            ) : (
              <View style={{ flexDirection: 'row' }}>
                <Ionicons
                  name="person"
                  size={48}
                  style={{ color: '#0f0f0f' }}
                />
                <View>
                  <Text style={styles.itemCode}>Selamat Datang</Text>
                  <Text style={styles.itemName}>{item.name}</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                  }}>
                  <Text style={styles.date}>{date}</Text>
                  <Text style={styles.time}>{time}</Text>
                </View>
              </View>
            )}
          </View>
        )}
      />

      <ScrollView horizontal>
        <SectionGrid
          itemDimension={100}
          // staticDimension={300}
          // fixed
          // spacing={20}
          sections={[
            {
              title: 'Layanan kami',
              data: content.slice(0, 3),
            },
          ]}
          style={styles.gridView2}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.button}>
              <View
                style={[
                  styles.contentContainer,
                  { backgroundColor: item.code },
                ]}>
                <Text style={styles.contentName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.avaiable}</Text>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
        />
      </ScrollView>
      
      <View>
        <SectionGrid
          itemDimension={100}
          // staticDimension={300}
          // fixed
          // spacing={20}
          sections={[
            {
              title: 'Bergabung dengan Team',
              data: content.slice(0, 6),
            },
          ]}
          style={styles.gridView}
          renderItem={({ item }) => (
              <View
                style={[
                  styles.teamContainer,
                  { backgroundColor: item.code },
                ]}>
                <Text style={styles.contentName}>{item.team}</Text>
                <Button title="Join"/>
              </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
        />
      </View>
      
      <View>
        <SectionGrid
          itemDimension={100}
          // staticDimension={300}
          // fixed
          // spacing={20}
          sections={[
            {
              title: 'Informasi score',
              data: content.slice(0, 3),
            },
          ]}
          style={styles.gridView}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.button}>
              <View
                style={[
                  styles.contentContainer,
                  { backgroundColor: item.code },
                ]}>
                <Text style={styles.contentName}>{item.name} VS {item.team}</Text>
                <Text style={styles.itemScore}>{item.score}</Text>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
        />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  gridView: {
    marginTop: Dimensions.get('window').height * 0.02,
  },
  gridView2: {
    flexDirection:"row",
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    height: 75,
    overflow: 'hidden',
  },
  itemName: {
    fontSize: 24,
    color: '#f0f0f0',
    fontWeight: 'bold',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#f0f0f0',
  },
  banner: {
    width: Dimensions.get('window').width,
    left: 0,
    position: 'absolute',
  },
  contentContainer: {
    width: Dimensions.get('window').width * 0.3,
    padding: 15,
    borderRadius: 5,
    height: Dimensions.get('window').height * 0.13,
    justifyContent: 'space-around',
  },
  teamContainer: {
    padding: 15,
    borderRadius: 5,
    height: Dimensions.get('window').height * 0.2,
    justifyContent: 'space-around',
  },
  itemScore:{
    fontSize:18,
    color: '#F0F0F0',
  },
  date: {
    justifyContent: 'flex-end',
    textAlign: 'right',
    fontSize: 12,
    color: '#f0f0f0',
  },
  time: {
    justifyContent: 'flex-end',
    textAlign: 'right',
    fontSize: 12,
    color: '#f0f0f0',
  },
  button: {
    justifyContent: 'space-around',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    alignItems: 'center',
    padding: 10,
  },
});

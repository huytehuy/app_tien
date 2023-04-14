import React from "react";
import { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, ScrollView,View } from "react-native";
import { Block, theme, Text } from "galio-framework";
import querystring from 'querystring';
import { Card, Button } from "../components";
import articles from "../constants/articles";

import ToggleSwitch from 'toggle-switch-react-native'

const { width } = Dimensions.get("screen");

class Home extends React.Component {
  const 
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
      <View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View style={styles.box}>
          <Text style={{color:'white',}}>Icon</Text>
          <Text style={{color:'white'}}>Icon</Text>
          <Text style={{color:'white'}}>Icon</Text>
        </View>
        <View style={styles.box}>
          <Text style={{color:'white',}}>Icon</Text>
          <Text style={{color:'white'}}>Icon</Text>
          <Text style={{color:'white'}}>Icon</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
        <View style={styles.box}>
          <Text style={{color:'white',}}>Icon</Text>
          <Text style={{color:'white'}}>Icon</Text>
          <Text style={{color:'white'}}>Icon</Text>
        </View>
        <View style={styles.box}>
          <Text style={{color:'white',}}>Icon</Text>
          <Text style={{color:'white'}}>Icon</Text>
          <Text style={{color:'white'}}>Icon</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
        <View style={styles.box}>
          <Text style={{color:'white',}}>Icon</Text>
          <Text style={{color:'white'}}>Icon</Text>
          <Text style={{color:'white'}}>Icon</Text>
        </View>
        <View style={styles.box}>
          <Text style={{color:'white',}}>Icon</Text>
          <Text style={{color:'white'}}>Icon</Text>
          <Text style={{color:'white'}}>Icon</Text>
          <ToggleSwitch
  isOn={true}
  onColor="green"
  offColor="red"
  // label="Example label"
  labelStyle={{ color: "black", fontWeight: "900" }}
  size="medium"
  onToggle={(value) => {console.log(isOn);handleToggleSwitch(value);}}
/>
          <AdafruitIOData />
        </View>
      </View>
      <View>
      <AdafruitIOData/>
    </View>
      </View>




        {/* <Block flex>
        <Card item={articles[0]} horizontal />
          <Block flex row>
            <Card
              item={articles[1]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <Card item={articles[2]} />
          </Block>
          <Card item={articles[3]} horizontal />
          <Card item={articles[4]} full />
        </Block> */}
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}
const AdafruitIOData = ({username, activeKey, feedName}) => {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const API_link=`https://io.adafruit.com/api/v2/huytehuy/feeds/light.status-light`
      const headers = new Headers({
        'X-AIO-Key': 'aio_OTjj08Ryk7Amc50wIwe23NqPONrp'
      });
      // fetch('https://randomuser.me/api/')
      //   .then(response => response.json())
      //   .then(data => setData(data['results'][0]['name']['first']+ data['results'][0]['name']['last']))
      //   .catch(error => console.error(error));
      fetch(API_link, {
        method: 'GET',
        headers: headers
      })
        .then(response => response.json())
        .then(data => {setData(data['last_value']),setIsOn(data['last_value']=="ON"?true:false)});
      fetch('https://io.adafruit.com/api/v2/huytehuy/feeds/light.value-light', {
          method: 'GET',
          headers: headers
        })
          .then(response => response.json())
          .then(data1 => {setData1(data1['last_value'])});
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      {data ? (
        <>
          <Text>{data}</Text>
          <Text>{data1}</Text>
          {/* <Text>Created at: {data1}</Text> */}
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};



const styles = StyleSheet.create({
  home: {
    width: width
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular'

  },
  box:{
    height:170,
    width:140,
    backgroundColor:'red',
    borderRadius:30,
    justifyContent:'space-evenly',
    alignItems:"center",

  }
});

export default Home;

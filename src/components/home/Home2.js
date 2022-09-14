import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Feather';
import {FreeGame, PaidGame} from '../../data/Data';
import CustomButton from '../customButtom/CustomButton';
import GameList from '../gameList/GameList';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthContext';
const Home2 = ({navigation}) => {
  const {navigate} = useNavigation();
  const {logout} = useContext(AuthContext);
  const data = [
    {
      image: require('../../assests/man.jpg'),
      title: 'man',
    },
    {
      image: require('../../assests/spider.jpg'),
      title: 'man',
    },
    {
      image: require('../../assests/ludo.jpg'),
      title: 'man',
    },
  ];
  const isCarousel = React.useRef(null);
  const [gameTab, setgameTab] = useState(1);
  const onSelectSwitch = value => {
    setgameTab(value);
  };
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 12,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: 'black',
              paddingTop: 10,
            }}>
            Hello Abubakar
          </Text>

          <Image
            source={require('../../assests/fsdd.jpg')}
            style={{height: 35, width: 35, borderRadius: 20}}
          />
        </View>
        <TouchableOpacity onPress={() => logout()}>
          <Text
            style={{
              textAlign: 'right',
              color: 'black',
              marginBottom: 8,
              fontSize: 16,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
        <View style={styles.parent}>
          <Icon name="search" size={25} color="lightgrey" />
          <TextInput placeholder="Search" />
        </View>
        <View style={styles.headingParent}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: '700',
              color: 'black',
              paddingTop: 10,
            }}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => logout()}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: 'lightblue',
                paddingTop: 10,
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>

        <Carousel
          useScrollView={true}
          ref={isCarousel}
          data={data}
          inactiveSlideShift={0}
          renderItem={({item}) => {
            return (
              <View>
                <Image style={styles.image} source={item.image} />
              </View>
            );
          }}
          sliderWidth={Dimensions.get('window').width - 40}
          itemWidth={300}
          loop={true}
        />

        <CustomButton
          onSelectSwitch={onSelectSwitch}
          selectionMode={1}
          option1="Free To Play"
          option2="Paid Games"
        />
        {gameTab == 1 &&
          FreeGame.map(item => (
            <GameList
              key={item.title}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  price: item.price,
                  image: item.image,
                  subtitle: item.subtitle,
                  isFree: item.isFree,
                  description: item.description,
                })
              }
            />
          ))}
        {gameTab == 2 &&
          PaidGame.map(item => (
            <GameList
              key={item.price}
              image={item.image}
              price={item.price}
              title={item.title}
              subtitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  price: item.price,
                  image: item.image,
                  subtitle: item.subtitle,
                  isFree: item.isFree,
                  description: item.description,
                })
              }
            />
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    padding: 10,
  },
  parent: {
    borderRadius: 8,
    borderColor: 'lightgrey',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  headingParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 150,
    width: 300,
    borderRadius: 10,
    marginTop: 12,
  },
});

export default Home2;

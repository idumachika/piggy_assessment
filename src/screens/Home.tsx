import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Filter from '../assets/icons/Filter';
import Search from '../assets/icons/Search';
import Cart from '../components/Cart';
import Categories from '../components/Categories';
import PopularItems from '../components/PopularItems';
import {colors, fonts} from '../theme/theme';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Beef');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Hi Chika</Text>
            <Text style={styles.subtitle}>Hungry now? 🔥</Text>
          </View>

          <Image
            source={require('../assets/images/big.jpg')}
            style={styles.userImage}
          />
        </View>

        {/* search field */}
        <View style={styles.form}>
          <Search />

          <TextInput
            placeholder="Search"
            style={styles.searchField}
            onSubmitEditing={() => console.log('people of God see magic 🤣')}
          />

          <Pressable>
            <Filter />
          </Pressable>
        </View>

        {/* category */}
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* popular items */}
        <PopularItems selectedCategory={selectedCategory} />
      </ScrollView>
      <Cart />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  title: {
    fontFamily: fonts.semi,
    color: colors.other,
    fontSize: 14,
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 26,
    color: colors.secondary,
    fontFamily: fonts.bold,
    paddingTop: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    height: 60,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
  },
  searchField: {
    textAlign: 'left',
    flex: 1,
    marginHorizontal: 15,
    fontFamily: fonts.semi,
    fontSize: 15,
    height: '100%',
  },
});

export default Home;

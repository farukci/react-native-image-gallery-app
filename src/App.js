import React, { useEffect, useState } from "react";
import { SafeAreaView, View, FlatList, } from "react-native";

import ImageCard from "./components/ImageCard";
import ImageList from "./images.json";

const App = () => {
  const [imgList, setImgList] = useState([]);
  useEffect(() => {
    setImgList(ImageList);
  }, []);

  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList 
          keyExtractor={(_, index) => index.toString()}
          data={imgList}
          renderItem={({item}) => <ImageCard imageItem={item} />}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  )
}

export default App;
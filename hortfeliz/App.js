import * as React from 'react';
import { Link, NavigationContainer } from '@react-navigation/native';
import { Image, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Linking } from 'react-native';

function TelaInicio({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#617A5F' }}>
      <Image style={{margin: 40}} source={require('./src_Logo/franzz.png')}></Image>
      <Button
        title='COMEÇAR'
        onPress={() => navigation.navigate('Animes')}
      />
    </View>
  );
}

function TelaAnimes() {
  return (
    <View style={{ flex: 1, justifyContent:'center', alignItems:'center', backgroundColor: '#617A5F' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>CATÁLOGO</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 40 }}>

          <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
            <Image source={require('./FrutasSRC/frutas1.png')}></Image>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', margin: 1 }}>Abacaxi</Text>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', margin: 5 }}>50kcal</Text>

            <Image source={require('./FrutasSRC/frutas2.png')}></Image>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', margin: 1 }}>Bergamota</Text>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', margin: 5 }}>53kcal</Text>

            <Image source={require('./FrutasSRC/frutas3.png')}></Image>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', margin: 1 }}>Maça</Text>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', margin: 5 }}>52kcal</Text>
            
          
            <Image source={require('./FrutasSRC/frutas4.png')}></Image>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', margin: 1 }}>Morango</Text>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', margin: 5 }}>100kcal</Text>
          </View>

      </View>
    </View>
  );
}
const tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

function TelaFilmes({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: '#617A5F' }}>
      <Text style={{ fontSize: 20, fontWeight: 600 , color: 'white', marginLeft: -120, margin: 10, marginTop: -90 }}>ALIMENTE-SE MELHOR!</Text>
      <Text style={{ fontSize: 13,  color: 'white', marginLeft: 30, marginRight: 30}}>A Hort Feliz tem como objetivo auxiliar na sua rotina e na sua alimentação. Contamos com uma tabela atualizada de 500 frutas e vegetais no nosso catálogo.</Text>
      <Text style={{ fontSize: 13,  color: 'white', marginLeft: 25, margin: 10, marginTop: 2}}>Nossa equipe tem como uma meta auxiliar na sua vida saudável. Nosso público alvo são todos aqueles que querem cuidar de si próprio.</Text>
    
    
      <Text style={{fontSize: 20, fontWeight: 600 , color: 'white', marginLeft: -260, margin: 10, marginTop: -190 }}>_________</Text>
      <Text style={{fontSize: 20, fontWeight: 600 , color: 'white', marginLeft: -260, marginTop: 140 }}>_________</Text>

      <Text style={{fontSize: 15, fontWeight: 600 , color: 'white', marginTop: 80, marginLeft: 30, marginRight: 30  }}>CRONÔMETRO NUTRICIONAL FUNCIONANDO EM BREVE!</Text>
      <Button
        title='SAIBA MAIS'
        onPress={() => navigation.navigate('Filmes1')}
      />
    
    </View>
  )
}

function TelaSTACKAnimes() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name='Animes' component={TelaAnimes} />
    </stack.Navigator>
  )
}

function Filmes1 () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#617A5F'}}>
    <Text style={{ color: 'white', marginLeft: 10, marginRight: 10 }}>EM BREVE SERÁ ADICIONADO UM CRONOMETRÔ! ABRA E VEJA O REPOSITÓRIO!</Text>
    <Text style={{ color: 'white', marginLeft: 10, marginRight: 10, marginTop: 30 }}> https://github.com/BrunoFranz31/cronometro-react-native (não consegui colocar como href)</Text>
    </View>  
  )
}

function TelaSTACKFilmes() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name='Filmes' component={TelaFilmes} />
      <stack.Screen name='Filmes1' component={Filmes1} />
    </stack.Navigator>
  )
}
export default function App() {
  return (
    /*TELA INICIO E TELA ANIMES*/
    <NavigationContainer>
      <tab.Navigator screenOptions={{ headerShown: false, tabBarActiveBackgroundColor: '#435B41'}}>
        <tab.Screen name='. ' 
          component={TelaInicio}
          options={{ tabBarIcon: ({ color, size }) => (<Icon name="home" color={'black'} size={35} />) }} />
        <tab.Screen name=' .'
          component={TelaSTACKAnimes}
          options={{ tabBarIcon: ({ color, size, backgroundColor }) => (<Icon name="albums" color={'black'} size={35} />) }} />
          <tab.Screen name=','
          component={TelaSTACKFilmes}
          options={{ tabBarIcon: ({ color, size, backgroundColor }) => (<Icon name="fitness-outline" color={'black'} size={35} />) }} />
      </tab.Navigator>
    </NavigationContainer>
  )
}
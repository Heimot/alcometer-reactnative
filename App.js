import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Custom radiobutton made by me needs gender array and 
// can handle as many radio buttons as you want!
// Just add more objects to the array for more of them.
import RadioButton from './radioButton';

import styles from './styles';

export default function App() {
  const [bottleCount, setBottleCount] = useState('1');
  const [hours, setHours] = useState('1');
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('male');
  const [level, setLevel] = useState(0);

  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ]

  const bottles = Array();
  let i;
  for (i = 1; i <= 20; i++) {
    bottles.push({ label: i, value: i })
  }

  const hour = Array();
  let h;
  for (h = 1; h <= 24; h++) {
    hour.push({ label: h, value: h })
  }

  const calculate = () => {
    console.log(gender)
    if (weight === 0 || '') {
      alert("Please enter your weight!");
    } else {
      const litres = bottleCount * 0.33;
      const grams = litres * 8 * 4.5;
      const burning = weight / 10;
      const left = grams - burning * hours;
      if (gender === 'male') {
        setLevel(left / (weight * 0.7));
      } else {
        setLevel(left / (weight * 0.6));
      }
    }
  }

  return (
    <ScrollView>
      <View style={styles.center}>
        <Text style={styles.title}>Alcometer</Text>
      </View>
      <Text style={styles.text}>Weight</Text>
      <TextInput onChangeText={(e) => setWeight(e)} placeholder='in kilograms' keyboardType='numeric' />
      <Text style={styles.text}>Bottles</Text>
      <Picker onValueChange={(e) => setBottleCount(e)} selectedValue={bottleCount}>
        {bottles.map((bottle, index) => {
          return (<Picker.Item key={index} label={`${bottle.label} bottles`} value={bottle.value} />)
        })}
      </Picker>
      <Text style={styles.text}>Time</Text>
      <Picker onValueChange={(e) => setHours(e)} selectedValue={hours}>
        {hour.map((hour, index) => {
          return (<Picker.Item key={index} label={`${hour.label} hours`} value={hour.value} />)
        })}
      </Picker>
      <Text style={styles.text}>Gender</Text>
      <RadioButton selected={gender} values={genders} onPress={(e) => setGender(e)}/>
      <View style={styles.center}>
        <Text style={level <= 0 ? styles.lowlevel : level < 0.5 ? styles.midlevel : styles.highlevel}>{level.toFixed(2) > 0 ? level.toFixed(2) : 0}</Text>
      </View>
      <Button title='Calculate' onPress={calculate}></Button>
    </ScrollView>
  );
}

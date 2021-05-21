import { Formik } from 'formik'
import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import GlobalStyle from './GlobalStyle'

export default function WaitingListForm({setFormData, handleSubmit}) {
    return (
        <View>
            <Text>FORMIK FORM  dd HERE</Text>
            <Formik
            initialValues = {{email:'', phone:''}}
            onSubmit={(values, actions) => {
                actions.resetForm()
                setFormData(values)
                handleSubmit()
                console.log(values)
            }}
            >
                {
                    (props)=>(
                        <View>
                            <TextInput
                            style={GlobalStyle.input}
                            placeholder="email"
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            keyboardType='default'
                            />
                            <TextInput
                            style={GlobalStyle.input}
                            placeholder="mobile"
                            onChangeText={props.handleChange('phone')}
                            value={props.values.phone}
                            keyboardType='numeric'
                            />
                            <Button 
                             style={GlobalStyle.input}
                            title='submit' color='green' onPress={props.handleSubmit}  />
                        </View>
                    )
                }
            </Formik>
        </View>
    )
}

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Button, Image, Dimensions } from 'react-native';
import {
    Card, Block, NavBar, Icon
} from 'galio-framework';
import theme from '../theme';

const { width } = Dimensions.get('screen');


const AppCard = (props) => {

    const [users, setUsers] = useState([])

    return (
        <ScrollView>
            <Text />
            <Text />
            <Card
                flex
                borderless
                title="Andrea Piacquadio"
                caption="7.54M views"
                location="Budapest, Hungary"
                avatar="https://images.pexels.com/users/avatars/224453/andrea-piacquadio-138.jpeg?auto=compress&fit=crop&h=256&w=256"
                imageStyle={styles.cardImageRadius}
                imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                image="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />


            <Card
                flex
                borderless
                title="Matheus Henrin"
                caption="187K views"
                location="São Paulo, Brazil"
                avatar="https://images.pexels.com/users/avatars/894808/matheus-henrin-383.jpeg?auto=compress&fit=crop&h=256&w=256"
                imageStyle={styles.cardImageRadius}
                imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                image="https://images.pexels.com/photos/3376116/pexels-photo-3376116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <Card
                flex
                borderless
                title="Sinitta Leunen"
                caption="16.9K views"
                location="Belgium"
                avatar="https://images.pexels.com/users/avatars/2154208/sinitta-leunen-450.jpeg?auto=compress&fit=crop&h=256&w=256"
                imageStyle={styles.cardImageRadius}
                imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                image="https://images.pexels.com/photos/5540773/pexels-photo-5540773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />

            <Card
                flex
                borderless
                title="Oladimeji Ajegbile"
                caption="5.22M views"
                location="Nigeria"
                avatar="https://images.pexels.com/users/avatars/401691/oladimeji-ajegbile-321.jpeg?auto=compress&fit=crop&h=256&w=256"
                imageStyle={styles.cardImageRadius}
                imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                image="https://images.pexels.com/photos/3118214/pexels-photo-3118214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />



        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: width,
        height: width / 2,
    },
    cards: {
        width,
        backgroundColor: theme.COLORS.WHITE,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    card: {
        backgroundColor: theme.COLORS.WHITE,
        width: width - theme.SIZES.BASE * 2,
        marginVertical: theme.SIZES.BASE * 0.875,
        elevation: theme.SIZES.BASE / 2,
    },
});


export default AppCard



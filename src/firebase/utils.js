import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { firebaseConfig } from './config'
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.setCustomParameters({ prompt: 'select_account' })

export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
FacebookProvider.setCustomParameters({ 'display': 'popup' });

export const handleUser = async (userAuth, additionalData) => {
    if (!userAuth) return

    const { uid } = userAuth
    const userRef = firestore.doc(`users/${uid}`)
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const { displayName, email } = userAuth
        const timestamp = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdTime: timestamp,
                ...additionalData
            })
        } catch (err) {
            // console.log(err)
        }
    }
    return userRef
}

export const addContacts = async (contact, additionalData) => {
    if (!contact) return

    const { phone } = contact
    const contactRef = firestore.collection('contacts')
    const snapshot = await contactRef.where('phone', "==", phone).get()

    if (!snapshot.empty) {
        throw new Error("Phone number already exists");
    }

    try {
        contactRef.add({
            ...contact,
            ...additionalData
        })
    } catch (err) {
        console.log(err)
    }

    return contactRef
}

export const getContacts = async (uid) => {
    const contactsRef = firestore.collection('contacts')
    const snapshot = await contactsRef.where("user_id", "==", uid).get()

    if (snapshot.empty) {
        throw new Error('No Group contacts')
    }
    const contacts = []

    snapshot.forEach(doc => {
        contacts.push({
            id: doc.id,
            ...doc.data()
        })
        //console.log(doc.id, '=>', doc.data());
    })

    return contacts
}


export const addGroups = async (group, additionalData) => {
    if (!group) return

    const { name } = group
    const groupRef = firestore.collection('groups')
    const snapshot = await groupRef.where('name', "==", name).get()

    if (!snapshot.empty) {
        throw new Error('Group name already exists')
    }

    const { contacts } = group
    const timestamp = new Date()
    try {
        //const newContacts = contacts.map((obj) => { return Object.assign({}, obj) })
        contacts.map(obj => {
            Object.keys(obj).forEach((key) => (obj[key] == null || obj[key] === 0) && delete obj[key]);
        })
        // console.log(newContacts)
        const res = await firestore.collection('groups').add({
            name,
            contacts,
            createdTime: timestamp,
            ...additionalData
        })
        return res
    }
    catch (error) {
        console.log(error)
    }


}

export const updateGroup = async (group, update) => {

    const { id } = group
    const groupRef = firestore.doc(`groups/${id}`)
    const snapshot = await groupRef.get()

    if (!snapshot.exists) {
        throw new Error('Group doesn\'t exist')
    }
    try {
        await groupRef.update({
            ...update
        })
    } catch (err) {
        // console.log(err)
    }

    return groupRef
}

export const getGroups = async (uid) => {

    const groupsRef = firestore.collection('groups')
    const snapshot = await groupsRef.where("user_id", "==", uid).get()

    if (snapshot.empty) {
        throw new Error('No Group contacts')
    }

    const groups = []

    snapshot.forEach(doc => {
        groups.push({
            id: doc.id,
            ...doc.data()
        })
    })

    return groups
}

// const citiesRef = db.collection('cities');
// const snapshot = await citiesRef.where('capital', '==', true).get();
// if (snapshot.empty) {
//   console.log('No matching documents.');
//   return;
// }  

// snapshot.forEach(doc => {
//   console.log(doc.id, '=>', doc.data());
// });
// // [END get_multiple]



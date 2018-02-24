
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Reference, ThenableReference } from '@firebase/database-types';

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingsProvider {
  currentUser:any;
  settingRef: Reference
  constructor() {
    console.log('Hello SettingsProvider Provider');
    firebase.auth().onAuthStateChanged(user => {
      this.currentUser = user;
      if(user){
        this.settingRef = firebase.database().ref(`/settings/`);
      }
    });
  }

  updateMinVer(minVer){
    console.log(minVer);
    return this.settingRef.update({ minVer })
  }

  updateCurrVer(currVer){
    console.log(currVer);
    return this.settingRef.update({ currVer })
  }

  updateRecallState(isRecalled){
    console.log(isRecalled);
    return this.settingRef.update({ isRecalled })
  }

  updateRecallMsg(recallMsg){
    console.log(recallMsg);
    return this.settingRef.update({ recallMsg })
  }

  getMinVer(){
    return new Promise((resolve, reject)=>{
      this.settingRef.child("minVer").once("value").then((minVer)=>{
        resolve(minVer.val())
      }).catch((err)=>{
        reject(err);
      })
    })

  }

  getCurrVer(){
    return new Promise((resolve, reject)=>{
      this.settingRef.child("currVer").once("value").then((currVer)=>{
        console.log(currVer.val())
        resolve(currVer.val())
      }).catch((err)=>{
        reject(err);
      })
    })
  }

  getRecallState(){
    return new Promise((resolve, reject)=>{
      this.settingRef.child("isRecalled").once("value").then((isRecalled)=>{
        resolve(isRecalled.val())
      }).catch((err)=>{
        reject(err);
      })
    });
  }

  getRecallMsg(){
    return new Promise((resolve, reject)=>{
      this.settingRef.child("recallMsg").once("value").then((recallMsg)=>{
        resolve(recallMsg.val())
      }).catch((err)=>{
        reject(err);
      })
    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings'

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  minVer: string;
  currVer: string;
  isRecalled: boolean;
  recallMsg: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private settingsProvider: SettingsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.refresh()
  }

  updateMinVer(){
    this.settingsProvider.updateMinVer(this.minVer).then(()=>{
      this.refresh();
    })
  }

  updateCurrVer(){
    this.settingsProvider.updateCurrVer(this.currVer).then(()=>{
      this.refresh();
    })
  }

  updateRecallState(){
    this.settingsProvider.updateRecallState(this.isRecalled).then(()=>{
      this.refresh();
    })
  }

  updateRecallMsg(){
    this.settingsProvider.updateRecallMsg(this.recallMsg).then(()=>{
      this.refresh();
    })
  }

  refresh(){
    this.settingsProvider.getMinVer().then((minVer: string)=>{
      console.log(minVer)
      this.minVer = minVer;
    });
    this.settingsProvider.getCurrVer().then((currVer: string)=>{
      console.log(currVer)
      this.currVer = currVer;
    });
    this.settingsProvider.getRecallState().then((isRecalled: boolean)=>{
      console.log(isRecalled)
      this.isRecalled = isRecalled;
    });
    this.settingsProvider.getRecallMsg().then((recallMsg: string)=>{
      console.log(recallMsg)
      this.recallMsg = recallMsg;
    });
  }

}

import { observable, action, computed, toJS } from "mobx";

export default class Cache1 {
  @observable name = 'David';

  @action setName(name) {
    this.name = name;
  }
}

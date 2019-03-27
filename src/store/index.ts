import { observable,computed,action } from "mobx"

class RootStore {

  @observable rootCount=0;

  @computed get computedRootCount() {
    return 'computed: '+this.rootCount;
  }

  @action addRootCount() {
    this.rootCount = this.rootCount + 1;
  }
}

export default RootStore;
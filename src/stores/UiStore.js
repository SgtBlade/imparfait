import { action, computed, decorate, observable} from "mobx";
import { EXERCISES } from "../consts/Exercises";
class UiStore {
    constructor(rootStore) {
      this.rootStore = rootStore;
      this.questions = EXERCISES;
      this.current = [];
      this.completed = [];
      this.wrong = [];
    }

    setCurrent (array) {
      this.current = array;
    }

    get getCurrent () {
      return this.current;
    }

    clearCompleted () {
      this.completed = [];
    }

    clearWrong () {
      this.wrong = [];
    }

    addToWrong (incoming) {
      this.wrong += incoming;
    }

    addToCompleted (incoming) {
      this.completed += incoming;
    }

    restart () {
      this.clearCompleted();
      this.clearWrong();
      this.questions = EXERCISES;
    }

    getResponse (index) {
      return this.current[index].userResponse
    }

    setResponse (value, index) {
      this.current[index].userResponse = value;
    }

    checkResponses = () => {
      return this.current.filter(el => {if(el.userResponse !== el.answer){el.hadError = true; return true;}else {el.hadError = false; return false;} })
    }

    moveOn = async () => {
      const toBeRemoved = this.current.filter(el => el.hadError === false)
      if(toBeRemoved)toBeRemoved.forEach(element => this.questions.remove(element))

      if(this.questions.length === 0) return false;
      else return true;
    }
    
  }

  decorate(UiStore, {
    rootStore: observable,
    questions: observable,
    current: observable,
    completed: observable,
    wrong: observable,

    setCurrent: action,
    clearCompleted: action,
    clearWrong: action,
    addToWrong: action,
    addToCompleted: action,
    restart: action,
    setResponse: action,
    checkResponses: action,
    
    getCurrent: computed,
    getResponse: action
  });

export default UiStore;

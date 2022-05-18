import "firebase/firestore";
import 'firebase/storage'; 
import { userConverter } from "../models/User";

class UserService {
  constructor(firebase) {
    this.db = firebase.firestore();
    this.storage = firebase.storage();
  }

  

}

export default UserService;

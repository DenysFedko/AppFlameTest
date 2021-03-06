import {USER_REMOVE} from '../constants';

interface UserItem {
  id: number;
  name: string;
  age: number;
  avatar: string;
}

export interface UsersState {
  list: UserItem[];
}

const initialState: UsersState = {
  list: [
    {
      id: 11479465,
      name: 'Linda',
      age: 20,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479464,
      name: 'Betty',
      age: 33,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479463,
      name: 'Jennifer',
      age: 25,
      avatar:
        'https://i.goadflack.com/nr/gflackegmadwbzo68gso44ww4cs4gg4.roriginal.ad0b58aa2262feb0c28120516f38ac5f.jpg',
    },
    {
      id: 11479462,
      name: 'Lisa',
      age: 31,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479461,
      name: 'Karen',
      age: 20,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479460,
      name: 'Michel',
      age: 33,
      avatar:
        'https://i.goadflack.com/nr/gflackegmadwbzo68gso44ww4cs4gg4.roriginal.ad0b58aa2262feb0c28120516f38ac5f.jpg',
    },
    {
      id: 11479459,
      name: 'Margaret',
      age: 24,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479458,
      name: 'Jennifer',
      age: 24,
      avatar:
        'https://i.goadflack.com/nr/gflack57qcu9xsdrc488w0g4gk0c4cg.roriginal.df380c85c652e6eb1a406d4a0222444c.jpg',
    },
    {
      id: 11479457,
      name: 'Daniel',
      age: 31,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479456,
      name: 'Linda',
      age: 28,
      avatar:
        'https://i.goadflack.com/nr/gflack57qcu9xsdrc488w0g4gk0c4cg.roriginal.df380c85c652e6eb1a406d4a0222444c.jpg',
    },
    {
      id: 11479455,
      name: 'Barbara',
      age: 26,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479454,
      name: 'Helen',
      age: 30,
      avatar:
        'https://i.goadflack.com/nr/gflack57qcu9xsdrc488w0g4gk0c4cg.roriginal.df380c85c652e6eb1a406d4a0222444c.jpg',
    },
    {
      id: 11479453,
      name: 'Mary',
      age: 35,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479452,
      name: 'Donald',
      age: 26,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479451,
      name: 'Elizabeth',
      age: 28,
      avatar:
        'https://i.goadflack.com/nr/gflack57qcu9xsdrc488w0g4gk0c4cg.roriginal.df380c85c652e6eb1a406d4a0222444c.jpg',
    },
    {
      id: 11479450,
      name: 'Linda',
      age: 25,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479449,
      name: 'Betty',
      age: 22,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479448,
      name: 'Jennifer',
      age: 20,
      avatar:
        'https://i.goadflack.com/nr/gflackekymquj1keo8scgs8c880ww04.roriginal.ec21ba1c5b11b5e00e310f7565938f5c.jpg',
    },
    {
      id: 11479447,
      name: 'Maria',
      age: 35,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479446,
      name: 'Nancy',
      age: 37,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479445,
      name: 'Maria',
      age: 22,
      avatar:
        'https://i.goadflack.com/nr/gflackekymquj1keo8scgs8c880ww04.roriginal.ec21ba1c5b11b5e00e310f7565938f5c.jpg',
    },
    {
      id: 11479444,
      name: 'Michel',
      age: 20,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479443,
      name: 'Dorothy',
      age: 20,
      avatar:
        'https://i.goadflack.com/nr/gflackekymquj1keo8scgs8c880ww04.roriginal.ec21ba1c5b11b5e00e310f7565938f5c.jpg',
    },
    {
      id: 11479442,
      name: 'Dorothy',
      age: 22,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479441,
      name: 'Jennifer',
      age: 31,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479440,
      name: 'Robert',
      age: 31,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479439,
      name: 'Susan',
      age: 25,
      avatar:
        'https://i.goadflack.com/nr/gflackekymquj1keo8scgs8c880ww04.roriginal.ec21ba1c5b11b5e00e310f7565938f5c.jpg',
    },
    {
      id: 11479438,
      name: 'David',
      age: 36,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479437,
      name: 'Linda',
      age: 28,
      avatar:
        'https://i.goadflack.com/nr/gflack7fhddx24yz8cg4k8cswokckkk.roriginal.89aa1ec26552cc62b9be3bd31eec15dc.jpg',
    },
    {
      id: 11479436,
      name: 'Susan',
      age: 35,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479435,
      name: 'Patricia',
      age: 34,
      avatar:
        'https://i.goadflack.com/nr/gflack7fhddx24yz8cg4k8cswokckkk.roriginal.89aa1ec26552cc62b9be3bd31eec15dc.jpg',
    },
    {
      id: 11479434,
      name: 'Susan',
      age: 24,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479433,
      name: 'Charles',
      age: 24,
      avatar:
        'https://i.goadflack.com/nr/gflack7fhddx24yz8cg4k8cswokckkk.roriginal.89aa1ec26552cc62b9be3bd31eec15dc.jpg',
    },
    {
      id: 11479432,
      name: 'Jennifer',
      age: 30,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479431,
      name: 'Patricia',
      age: 20,
      avatar:
        'https://i.goadflack.com/nr/gflack7fhddx24yz8cg4k8cswokckkk.roriginal.89aa1ec26552cc62b9be3bd31eec15dc.jpg',
    },
    {
      id: 11479430,
      name: 'Mary',
      age: 32,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479429,
      name: 'Dorothy',
      age: 21,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479428,
      name: 'Barbara',
      age: 32,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479427,
      name: 'Helen',
      age: 20,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
    {
      id: 11479426,
      name: 'Michel',
      age: 26,
      avatar:
        'https://i.goadflack.com/nr/gflack9dbap0qbc2sk8sko84o4sgww8.roriginal.bd73511d0ba910dacb1bc2fca4ae6683.jpg',
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  const USERS = [...state.list];

  switch (action.type) {
    case USER_REMOVE:
      USERS.splice(USERS.indexOf(action.payload, 0), 1);
      return {
        ...state,
        list: USERS,
      };
    default:
      return state;
  }
};
export default usersReducer;

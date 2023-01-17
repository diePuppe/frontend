const state = {
  experts: {
    'ID1': {
      name: 'Anna',
      available: true,
      skills: [{name: 'Java', level: 10}],
      image:"https://img.a.transfermarkt.technology/portrait/header/13775-1662993749.jpg?lm=1",
      //TODO email: this.name"@zeiss.com" ermöglichen
    },
    'ID2': {
      name: 'Frank',
      available: true,
      skills: [{name: 'Java', level: 10}],
      image:"https://img.a.transfermarkt.technology/portrait/header/13775-1662993749.jpg?lm=1"
    },
    'ID3': {
      name: 'Anna',
      available: true,
      skills: [{name: 'Java', level: 10}],
      image:"https://img.a.transfermarkt.technology/portrait/header/13775-1662993749.jpg?lm=1"
    },
    'ID4': {
      name: 'Anna',
      available: true,
      skills: [{name: 'Java', level: 10}],
      image:"https://img.a.transfermarkt.technology/portrait/header/13775-1662993749.jpg?lm=1"
    },
    'ID5': {
      name: 'Anna',
      available: true,
      skills: [{name: 'Java', level: 10}],
      image:"https://img.a.transfermarkt.technology/portrait/header/13775-1662993749.jpg?lm=1"
    },
    'ID6': {
      name: 'Anna',
      available: true,
      skills: [{name: 'Java', level: 10}],
      image:"https://img.a.transfermarkt.technology/portrait/header/13775-1662993749.jpg?lm=1"
    },
    'ID7': {
      name: 'Anna',
      available: true,
      skills: [{name: 'Java', level: 10}],
      image:"https://img.a.transfermarkt.technology/portrait/header/13775-1662993749.jpg?lm=1"
    }
  }
}

//Die Mutation verändert aktiv das Object
const mutations = {
    updateExpert(state, payload) {
      Object.assign(state.experts[payload.id],
        payload.updates)    }
}
//Hier kommt das Clickevent an und sendet die Informationen an die Mutations oben
const actions = {
    updateExpert({commit}, payload){
    commit("updateExpert", payload)
    }
}

const getters = {
  experts: (state)=>{
    return state.experts
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

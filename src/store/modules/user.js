import { api, setToken, clearToken } from "../api";

export default {
  namespaced: true,
  state: {
    user: null,
    profile: null
  },
  getters: {
    username: function(state) {
      return (state.user && state.user.username) || null;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setProfile(state, payload) {
      state.profile = payload;
    }
  },
  actions: {
    // registerUser: async function(context, payload) {},
    
        loginUser: async function(context, payload) {
            clearToken();
            try{
            const response = await api.post("/users/login", {
              user: {
                email: payload.email,
                password: payload.password
              }
            });

            context.commit("setUser", response.data.user);
            setToken(response.data.user.token);
          }catch(e){
            console.error(e);
            throw e;
         }
    
    
    }
  }
};

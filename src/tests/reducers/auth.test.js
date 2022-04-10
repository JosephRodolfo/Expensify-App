import authReducer from '../../reducers/auth';


test('should set uid for logged in user', ()=> {

    const action = {
        type: 'LOGIN',
        uid: "123abc"
    }
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);

});


test('should clear uid for log out', ()=> {
    const action = {
        type: 'LOGOUT',
    }

    const state = authReducer({uid: "123abc"}, action);

    expect(state).toEqual({});


});
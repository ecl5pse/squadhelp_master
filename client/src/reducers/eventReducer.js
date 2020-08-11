import ACTION from '../actions/actionTypes';

const initialState = {
  eventsArr: [],

};


export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.NEW_EVENT_ACTION:
    {
      return  {
        eventsArr: [...state.eventsArr, action.newEventValue]
      }
    }
    default:
      return state;
  }

}
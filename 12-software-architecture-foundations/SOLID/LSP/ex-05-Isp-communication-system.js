canSendMessages = (state) => ({
  sendMessage: (message) => {
    console.log(`Sending message: "${message}" from ${state.name}`);
  },
})

const canSchedule = (state) => ({
  schedule: (time) => {
    console.log(`Scheduled a call at ${time} for ${state.name}`);
  },
});

const canCancel = (state) => {
  if (state.messageId && state.isScheduled) {
    return {
      cancel: (appointmentId) => {
        console.log(`Cancelled appointment ${appointmentId} for ${state.name}`);
      },
    };
  }
  return Error('Cancel operation not supported for this message');
};

const trackReshaper = (state) => {
    return state.messageId || state.viewId || '';
}
const canTrack = (state) => ({
  track: () => {
    console.log(`Tracking progress for ${trackReshaper(state)}`);
  },
});

const createEmail = (msg) => {
  const state = {msg};

  return {
    ...canSendMessages(state),
    ...canSchedule(state),
    ...canTrack(state),
    ...canCancel(state),
  };
};

const createSMS = (msg) => {
  const state = {msg};

  return {
    ...canSendMessages(state),
    ...canSchedule(state),
    ...canCancel(state),
  };
}

const createNotification = (msg) => {
  const state = {msg};

  return {
    ...canSendMessages(state),
    ...canTrack(state),
    ...canCancel(state),
  };
};

const createAppMessage = (msg) => {
  const state = {msg};

  return {
    ...canSendMessages(state),
    ...canTrack(state),
  };
};

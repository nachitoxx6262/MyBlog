const CREATE_POST = 'CREATE_POST'

export function addPost(id, title) {
    return {
      type: CREATE_POST,
      payload: { id, title },
    }
  }
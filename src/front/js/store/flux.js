const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      news: []
    },
    actions: {
      getAllNews: async () => {
        try {
          const response = await fetch(`${process.env.BACKEND_URL}/api/news`)
          if (response.ok) {
            const data = await response.json()
            setStore({ news: data })
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}

export default getState

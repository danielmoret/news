const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      news: []
    },
    actions: {
      getNews: async (search = '') => {
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/news?content=${search}&title=${search}`
          )
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

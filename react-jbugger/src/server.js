import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", {
        name : 'Alan Baker',
        mobileNumber : '00',
        email : 'alanb@msggroup.com',
        username : 'alanbkr',
        ADM : true,
        PM : true,
        TM : false,
        DEV : false,
        TEST : false

    })
      server.create("user",
      {
          name : 'Wake Brook',
          mobileNumber : '00',
          email : 'wakeb@msggroup.com',
          username : 'wakebrk',
          ADM : false,
          PM : false,
          TM : true,
          DEV : false,
          TEST : false
      })
      server.create("user",
      {
          name : 'Super Brother',
          mobileNumber : '00',
          email : 'superbrt@msggroup.com',
          username : 'superb',
          ADM : false,
          PM : false,
          TM : false,
          DEV : true,
          TEST : true
      })
    },

    routes() {
      this.namespace = "api"

      this.get("/inspectUsers", (schema) => {
        return schema.users.all()
      })
    },
  })

  return server
}